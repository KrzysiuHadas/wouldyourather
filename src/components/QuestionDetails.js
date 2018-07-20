import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper'
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
        const {authedUser, dispatch} = this.props
        const currentQuestionID = 'loxhs1bqm25b708cmbf3g'
        // tu jest problem
        const answer = e.target.value

        console.log("TUTEEEJ, ", answer)
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

        return (
            <div> <Paper style={{ padding: 10, marginTop: 10, marginBottom: 10 }}>
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
                            {optionTwo} ({numberOfPeopleVotedTwo} vote | {numberOfPeopleVotedTwo / allVotes * 100}%)
                        </li>
                    </ul>
                }

                {
                    // if the question has NOT been answered, show this:
                    this.checkIfQuestionAnswered(currentQuestionID) === null &&
                    <List>
                        <ListItem button
                                onClick={this.questionAnswered}
                                value="optionOne"
                                >
                                <ListItemText primary={optionOne} />
                        </ListItem>
                        <ListItem button
                                onClick={this.questionAnswered}
                                value="optionTwo"
                                >
                                <ListItemText primary={optionTwo} />
                        </ListItem>
                    </List>
                }
</Paper>
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
