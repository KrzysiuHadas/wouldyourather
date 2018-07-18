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
                    console.log("id", id);
                    let matchedQuestionObject = all[id]
                    answeredQuestionsArray = [...answeredQuestionsArray, matchedQuestionObject]
                }
            }
            // sort the answers from most recent
            answeredQuestionsArray.sort(function (x, y) {
                console.log("siusiak", x.timestamp, y.timestamp);
                return y.timestamp - x.timestamp;
            })
            console.log("answeredquestionsarray: ", answeredQuestionsArray);
            return answeredQuestionsArray
        } else {

        }
    }

    render() {
        const { questions, users, authedUser, isAnswered } = this.props
        const answered = users[authedUser].answers
        const sorted = this.returnQuestions(answered, questions, isAnswered)
        console.log("SORTED: ", sorted);
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