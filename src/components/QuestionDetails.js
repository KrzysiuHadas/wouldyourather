import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionDetails extends Component {
  render() {
    const { users, questions, authedUser } = this.props

    return (
      <div>
        
      </div>
    )
  }
}

export default connect()(QuestionDetails)
