import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'


class Profile extends Component {

  render() {
    const { users, questions, authedUser } = this.props
    const currentQuestionID = '6ni6ok3ym7mf1p33lnez'
    // TODO: Show avatar
    // 
    console.log(authedUser);
    return (
      <div>
        <h1>{authedUser}</h1>
        <h3> Asked questions </h3>
        <QuestionList type="asked" />
        <hr />
        <h3> Answered questions </h3>
        <QuestionList type="answered" />
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

export default connect(mapStateToProps)(Profile)
