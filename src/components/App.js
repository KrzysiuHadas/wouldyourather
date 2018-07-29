import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import QuestionDetails from './QuestionDetails'
import Profile from './Profile'
import AddQuestion from './AddQuestion'
import Login from './Login'
import Leaderboard from './Leaderboard'
import Nav from './Nav'
import page404 from './page404'

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())

  }

  render() {
    const { avatarURL, authedUser } = this.props
    return (
      <Router>
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
                          <Route path='page404' component={page404} />
                        </Switch>
                      </div>
                    </Fragment>
                }
              </Fragment>
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  let avatarURL = ''
  if (authedUser && users) {
    avatarURL = users[authedUser].avatarURL
  }

  return {
    loading: authedUser === null,
    avatarURL,
    authedUser
  }
}

export default connect(mapStateToProps)(App)