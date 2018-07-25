import React, { Component } from 'react'
import QuestionList from './QuestionList'
import Button from '@material-ui/core/Button'

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
                <Button 
                    variant="outlined"
                    onClick={this.toggleUnansweredClicked} 
                    style={{marginTop: 10, marginBottom: 10, paddingTop: 0, paddingBottom: 0}}>
                    {this.state.answered === true
                        ? <p> Show unanswered questions </p>
                        : <p> Show answered questions </p>
                    }
                </Button>
                {
                    this.state.answered 
                        ? <QuestionList type={'answered'} />
                        : <QuestionList type={'unanswered'} />
                }
            </div>
        )
    }
}

export default Dashboard
