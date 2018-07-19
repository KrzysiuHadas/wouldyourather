import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared';


class QuestionDetails extends Component {

    // This function returns the answered option if the question has been answered.
    // Returns null if it hasn't
    checkIfQuestionAnswered = (question) => {
        const { questions, authedUser } = this.props

        const currentQuestion = questions[question]

        if (currentQuestion) {
            // get the votes for both options
            const optionOneArray = currentQuestion.optionOne.votes
            const optionTwoArray = currentQuestion.optionTwo.votes
            console.log("PIERWSZA TABLICA: ", optionOneArray);
            console.log("DRUGA TABLICA: ", optionTwoArray);
            // check if any of them contains the authed User

            if (optionOneArray.includes(authedUser)) {
                console.log('tutaj');
                return 'optionOne'
            } else if (optionTwoArray.includes(authedUser)) {
                console.log('tutaj');
                return 'optionTwo'
            }
        }

        return null
    }

    questionAnswered = (e) => {
        e.preventDefault()
        const {authedUser, dispatch} = this.props
        const currentQuestionID = 'loxhs1bqm25b708cmbf3g'
        const answer = e.target.value

        dispatch(handleAnswerQuestion({
            authedUser,
            qid: currentQuestionID,
            answer
        }))

        
    }
    render() {
        const { questions, authedUser } = this.props
        const currentQuestionID = 'loxhs1bqm25b708cmbf3g'

        let optionOne = ''
        let optionTwo = ''
        let author = ''
        let numberOfPeopleVotedOne = 0
        let numberOfPeopleVotedTwo = 0
        let allVotes = 0
        if (questions[currentQuestionID]) {
            optionOne = questions[currentQuestionID].optionOne.text
            optionTwo = questions[currentQuestionID].optionTwo.text
            author = questions[currentQuestionID].author
            numberOfPeopleVotedOne = questions[currentQuestionID].optionOne.votes.length
            numberOfPeopleVotedTwo = questions[currentQuestionID].optionTwo.votes.length
            allVotes = numberOfPeopleVotedOne + numberOfPeopleVotedTwo
        }

        console.log("#########", this.checkIfQuestionAnswered(currentQuestionID));

        return (
            <div>
                <h2>Would you rather</h2>
                Author: {author}
                <br />
                {
                    // if the question has been answered, show this:
                    this.checkIfQuestionAnswered(currentQuestionID) &&
                    <ul>
                        <li>
                            {
                                this.checkIfQuestionAnswered(currentQuestionID) === 'optionOne' &&
                                <span role="img">✅ </span>
                            }
                            {optionOne} ({numberOfPeopleVotedOne} vote | {numberOfPeopleVotedOne / allVotes * 100}%)
                        </li>
                        <li>
                            {
                                this.checkIfQuestionAnswered(currentQuestionID) === 'optionTwo' &&
                                <span role="img">✅ </span>
                            }
                            {optionTwo} ({numberOfPeopleVotedTwo} vote | {numberOfPeopleVotedOne / allVotes * 100}%)
                        </li>
                    </ul>
                }

                {
                    // if the question has NOT been answered, show this:
                    this.checkIfQuestionAnswered(currentQuestionID) === null &&
                    <ul>
                        <li>
                            <button
                                onClick={this.questionAnswered}
                                value="optionOne"
                                >
                                ⭕️
                            </button> {optionOne}
                        </li>
                        <li>
                            <button
                                onClick={this.questionAnswered}
                                value="optionTwo"
                                >
                                ⭕️
                            </button> {optionTwo}
                        </li>
                    </ul>
                }

            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser }) {
    return {
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionDetails)
