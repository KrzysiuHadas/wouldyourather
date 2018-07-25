import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Profile extends Component {

  state = {
    loggedIn: true,
  }

  handleLogout = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    console.log("wcisnales logout")
    dispatch(setAuthedUser(''))

    this.setState(() => ({
      loggedIn: false,
    })) 
  }

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to='/login' />
    }
    const { users, authedUser } = this.props
    const imageURL = users[authedUser].avatarURL
    return (
      <div>
        <div className="center">
          <Typography variant="display1" >@{authedUser}</Typography><br />
          <img src={imageURL} width="125" height="125" alt="avatar" />
        </div>
        <Typography variant="headline"> Asked questions</Typography>
        <QuestionList type="asked" />

        <Typography variant="headline"> Answered questions</Typography>
        <QuestionList type="answered" />
        <br />
        <Button
          variant="outlined"
          onClick={this.handleLogout}
          >
          Logout
        </Button>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Profile)
