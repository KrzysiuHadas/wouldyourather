import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component {

    returnQuestions = (answered, all, isAnswered) => {
        // take all answered questions of authed user, all questions and the state of the dashboard
        if (isAnswered) {
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
        } else {
            // create an empty array
            let unansweredQuestionsArray = []
            // iterate through all questions object and see if any of the questions inside
            // are also present in the answered object passed to this function
            for (var id in all) {
                if(!answered.hasOwnProperty(id)) {
                    unansweredQuestionsArray = [...unansweredQuestionsArray, all[id]]
                }
            }
            unansweredQuestionsArray.sort(function (x, y) {
                return y.timestamp - x.timestamp;
            })
            return unansweredQuestionsArray
        }
    }

    render() {
        const { questions, users, authedUser, isAnswered } = this.props
        const answered = users[authedUser].answers
        console.log("answered", answered)
        const sorted = this.returnQuestions(answered, questions, isAnswered)
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
    let isAnswered = props.isAnswered

    return {
        questions,
        users,
        authedUser,
        isAnswered
    }
}

export default connect(mapStateToProps)(QuestionList)