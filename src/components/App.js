import { handleInitialData, handleAddQuestion } from '../actions/shared'
import Dashboard from './Dashboard'
import QuestionDetails from './QuestionDetails'
import Profile from './Profile'
import AddQuestion from './AddQuestion'
import Login from './Login'
import Leaderboard from './Leaderboard'
import QuestionList from './QuestionList'
import Nav from './Nav'

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div>
          <LoadingBar />
          <AppBar position="static" color="primary">
            <Toolbar variant="dense">
              <Typography variant="title" color="inherit">
                <Nav />
              </Typography>
            </Toolbar>
          </AppBar>
          <div style={{ padding: 20 }} >
            {this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/leaderboard' exact component={Leaderboard} />
                <Route path='/profile' exact component={Profile} />
                <Route path='/add' exact component={AddQuestion} />
              </div>
            }
          </div>
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)