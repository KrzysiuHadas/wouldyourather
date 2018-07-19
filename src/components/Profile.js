import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'


class Profile extends Component {

  render() {
    const { users, authedUser } = this.props
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

function mapStateToProps({ users, authedUser}) {
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Profile)
