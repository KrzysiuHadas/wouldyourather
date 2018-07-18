import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Asked questions:</h1>
        <QuestionList type="asked" />
        <h1>Answered questions:</h1>
        <QuestionList type="answered" />
      </div>
    )
  }
}

export default connect()(Profile)