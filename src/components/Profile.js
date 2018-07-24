import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'
import Typography from '@material-ui/core/Typography'

class Profile extends Component {

  render() {
    const { users, authedUser } = this.props
    const imageURL = users[authedUser].avatarURL
    console.log(imageURL)
    // TODO: Show avatar
    // 
    console.log(authedUser);
    return (
      <div>
        <Typography variant="display1" >@{authedUser}</Typography>
        <img src={imageURL} width="125" height="125"/>
        <Typography variant="headline"> Asked questions</Typography>
        <QuestionList type="asked" />
        <hr />
        <Typography variant="headline"> Answered questions</Typography>
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
