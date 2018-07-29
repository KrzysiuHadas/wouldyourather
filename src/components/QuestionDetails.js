import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared';
import Typography from '@material-ui/core/Typography'
import { Paper } from '@material-ui/core'

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

    questionAnswered = (e) => {
        e.preventDefault()
        const { authedUser, dispatch } = this.props
        const currentQuestionID = this.props.id
        const answer = e.target.value

        dispatch(handleAnswerQuestion({
            authedUser,
            qid: currentQuestionID,
            answer
        }))

    }
    render() {
        const { questions, id } = this.props
        const currentQuestionID = id
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
                <Paper style={{ padding: 10, marginTop: 10, marginBottom: 10, width: 400, height: 200 }}>
                    <Typography variant="headline" > Would you rather</Typography>
                    <Typography variant="subheading">Author: @{author}</Typography>

                    {
                        // if the question has been answered, show this:
                        this.checkIfQuestionAnswered(currentQuestionID) &&
                        <ul>
                            <li>
                                {
                                    this.checkIfQuestionAnswered(currentQuestionID) === 'optionOne' &&
                                    <Typography variant="caption">
                                        Your answer:
                                    </Typography>
                                }
                                <Typography variant="body2">
                                    {optionOne} (votes: {numberOfPeopleVotedOne} | {Math.round(numberOfPeopleVotedOne / allVotes * 100)}%)
                                </Typography>
                            </li>
                            <li>
                                {
                                    this.checkIfQuestionAnswered(currentQuestionID) === 'optionTwo' &&
                                    <Typography variant="caption">
                                        Your answer:
                                    </Typography>
                                }
                                <Typography variant="body2">
                                    {optionTwo} (votes: {numberOfPeopleVotedTwo} | {Math.round(numberOfPeopleVotedTwo / allVotes * 100)}%)
                                </Typography>
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
                                    className='btn'
                                >
                                    {optionOne}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={this.questionAnswered}
                                    value="optionTwo"
                                    className='btn'
                                >
                                    {optionTwo}
                                </button>
                            </li>
                        </ul>
                    }
                </Paper>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser }, props) {
    const id = props.match.params.id
    return {
        questions,
        authedUser,
        id
    }
}

export default connect(mapStateToProps)(QuestionDetails)