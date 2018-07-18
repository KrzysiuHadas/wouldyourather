import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component {

    returnQuestions = (answered, all, type) => {
        // take all answered questions of authed user, all questions and the state of the dashboard
        if (type === 'answered') {
            // if the dashboard asks for anwswered questions:
            let answeredQuestionsArray = []
            // iterate over all answered quesitons
            for (var id in answered) {
                // just having the answered questions IDs taken from 'answered' property in the user object
                // fill the array with matching objects from questions array, so that we know the timestamp and know when the question was posted

                if (all.hasOwnProperty(id)) {
                    let matchedQuestionObject = all[id]
                    answeredQuestionsArray = [...answeredQuestionsArray, matchedQuestionObject]
                }
                
            }
            // sort the answers from most recent
            answeredQuestionsArray.sort(function (x, y) {
                return y.timestamp - x.timestamp;
            })
            return answeredQuestionsArray
        } else if (type === 'unanswered') {
            // create an empty array
            let unansweredQuestionsArray = []
            // iterate through all questions object and see if any of the questions inside
            // are also present in the answered object passed to this function
            for (var id2 in all) {
                if(!answered.hasOwnProperty(id2)) {
                    unansweredQuestionsArray = [...unansweredQuestionsArray, all[id2]]
                }
            }
            unansweredQuestionsArray.sort(function (x, y) {
                return y.timestamp - x.timestamp;
            })
            return unansweredQuestionsArray
        } else if (type === 'asked') {
            // get the IDs of questions asked by the current logged user
            const askedQuestions = this.props.users[this.props.authedUser].questions
            let askedQuestionsArray = []
            // iterate through the question IDs
            for (var index in askedQuestions) {
                //save the question objects that match the IDs of the user-asked questions
                if(all.hasOwnProperty(askedQuestions[index])) {
                    askedQuestionsArray = [...askedQuestionsArray, all[askedQuestions[index]]]
                }
            }
            askedQuestionsArray.sort(function (x, y) {
                return y.timestamp - x.timestamp;
            })
            return askedQuestionsArray
        }
    }

    render() {
        const { questions, users, authedUser, type } = this.props
        const answered = users[authedUser].answers
        const sorted = this.returnQuestions(answered, questions, type)
        return (
            <div>
                <ul>
                    {
                        sorted.map((question) => (
                            <li key={question.id}><Question id={question.id} /></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, props) {
    let type = props.type
    
    return {
        questions,
        users,
        authedUser,
        type
    }
}

export default connect(mapStateToProps)(QuestionList)