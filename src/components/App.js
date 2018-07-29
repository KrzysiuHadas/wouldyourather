import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import QuestionDetails from './QuestionDetails'
import Profile from './Profile'
import AddQuestion from './AddQuestion'
import Login from './Login'
import Leaderboard from './Leaderboard'
import Nav from './Nav'
import Page404 from './Page404'

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  checkPathExists = (array, path) => {
    const arrayOfQuestionIDs = this.props.questionIDs
    for (let i in arrayOfQuestionIDs) {
      console.log(`/question/${arrayOfQuestionIDs[i]}`);
      if (path === (`/question/${arrayOfQuestionIDs[i]}`)) {
        return true
      }
    }
    return (array.indexOf(path) > -1)
  }

  render() {
    const { avatarURL, authedUser, questionIDs } = this.props
    const arrayWithAvailablePathnames = ['/', '/leaderboard', '/profile', '/add']
    console.log("questionids ", questionIDs)
    if(!this.checkPathExists(arrayWithAvailablePathnames, this.props.location.pathname)) {
      return <Page404 />
    }

    return (
        <div>
          <LoadingBar />
          {
            (authedUser === '')
              ? <Login />
              : <Fragment>
                {
                  this.props.loading === true
                    ? null
                    : <Fragment>
                      <Nav avatarURL={avatarURL} />
                      <div style={{ padding: 20 }} >
                        <Switch>
                          <Route path='/' exact component={Dashboard} />
                          <Route path='/leaderboard' component={Leaderboard} />
                          <Route path='/profile' component={Profile} />
                          <Route path='/add' component={AddQuestion} />
                          <Route path='/question/:id' component={QuestionDetails} />
                          <Route path='/page404' component={Page404} />
                        </Switch>
                      </div>
                    </Fragment>
                }
              </Fragment>
          }
        </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  let avatarURL = ''
  if (authedUser && users) {
    avatarURL = users[authedUser].avatarURL
  }

  return {
    loading: authedUser === null,
    avatarURL,
    authedUser,
    questionIDs: Object.keys(questions)
  }
}

export default withRouter(connect(mapStateToProps)(App))