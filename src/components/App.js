import React, { Component } from 'react'
import { handleInitialData, handleAddQuestion } from '../actions/shared'
import Dashboard from './Dashboard'
import QuestionDetails from './QuestionDetails'
import Profile from './Profile'
import AddQuestion from './AddQuestion'
import Login from './Login'

import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard';
import QuestionList from './QuestionList';


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        <div style={{ padding: 20 }} >
          {this.props.loading === true
            ? null
            : <div><QuestionDetails /></div>// Should be Dashboard, QuestionDetails just for testing
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)