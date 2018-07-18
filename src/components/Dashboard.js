import React, { Component } from 'react'
import QuestionList from './QuestionList'
import Profile from './Profile'
class Dashboard extends Component {

    state = {
        answered: false,
    }

    toggleUnansweredClicked = (e) => {
        e.preventDefault()
        this.setState((oldState) => ({
            answered: !oldState.answered,
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleUnansweredClicked}>
                    {this.state.answered === true
                        ? <p>Show unanswered questions</p>
                        : <p>Show answered questions</p>
                    }
                </button>
                {
                    this.state.answered 
                        ? <QuestionList type={'answered'} />
                        : <QuestionList type={'unanswered'} />
                }
                <br />
                <hr />
                <br />
                <Profile />
            </div>
        )
    }
}



export default Dashboard
