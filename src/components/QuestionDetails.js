import React, { Component } from 'react'
import { connect } from 'react-redux'


class QuestionDetails extends Component {

    // This function returns the answered option if the question has been answered.
    // Returns null if it hasn't
    checkIfQuestionAnswered = (question) => {
        const { questions, authedUser } = this.props

        const currentQuestion = questions[question]

        if(currentQuestion) {
            // get the votes for both options
            const optionOneArray = currentQuestion.optionOne.votes
            const optionTwoArray = currentQuestion.optionTwo.votes

            // check if any of them contains the authed User

            if(optionOneArray.includes(authedUser)) {
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
    
    

    return (
      <div>
        
      </div>
    )
  }
}

function mapStateToProps({ users, questions, authedUser}) {
    return {
        users,
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionDetails)
