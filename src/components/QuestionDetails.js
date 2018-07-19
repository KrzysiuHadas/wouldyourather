import React, { Component } from 'react'
import { connect } from 'react-redux'


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

            // check if any of them contains the authed User

            if (optionOneArray.includes(authedUser)) {
                return 'optionOne'
            } else if (optionTwoArray.includes(authedUser)) {
                return 'optionTwo'
            }
        }

        return null
    }


    render() {
        const { users, questions, authedUser } = this.props
        const currentQuestionID = 'vthrdm985a262al8qx3do'

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



        return (
            <div>
                <h2>Would you rather</h2>
                Author: {author}
                <br />
                {
                    this.checkIfQuestionAnswered(currentQuestionID) &&
                    <ul>
                        <li>
                            {
                                this.checkIfQuestionAnswered(currentQuestionID) === 'optionOne' &&
                                <p>This is your answer:</p>
                            }
                            {optionOne} ({numberOfPeopleVotedOne} vote | {numberOfPeopleVotedOne / allVotes * 100}%)
                        </li>
                        <li>
                            {
                                this.checkIfQuestionAnswered(currentQuestionID) === 'optionTwo' &&
                                <span>✅ </span>
                            }
                            {optionTwo} ({numberOfPeopleVotedTwo} vote | {numberOfPeopleVotedOne / allVotes * 100}%)
                        </li>
                    </ul>
                }

            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    return {
        users,
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionDetails)
