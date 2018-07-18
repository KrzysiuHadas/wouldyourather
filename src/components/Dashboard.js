import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'

class Dashboard extends Component {

    state = {
        // change this to FALSE later, which is the initial state! TRUE JUST FOR TESTING PURPOSES NOW
        answered: true,
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
                        ? <QuestionList isAnswered={true} />
                        : <QuestionList isAnswered={false} />
                }
                
            </div>
        )
    }
}



export default connect()(Dashboard)
