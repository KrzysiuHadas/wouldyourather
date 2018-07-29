import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Paper } from '@material-ui/core'

class AddQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false,
    }

    handleFirstChange = (e) => {
        const optionOne = e.target.value

        this.setState((oldState) => ({
            optionOne,
            optionTwo: oldState.optionTwo
        }))
    }

    handleSecondChange = (e) => {
        const optionTwo = e.target.value

        this.setState((oldState) => ({
            optionTwo,
            optionOne: oldState.optionOne
        }))
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const optionOneText = this.state.optionOne
        const optionTwoText = this.state.optionTwo
        const author = this.props.authedUser

        this.props.dispatch(handleAddQuestion({
            author,
            optionOneText,
            optionTwoText
        }))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: true,
        }))
    }



    render() {
        const { optionOne, optionTwo, toHome } = this.state

        if (toHome === true) {
            return <Redirect to="/" />
        }

        return (
            <div>
                <Typography variant="headline" variant="display2"> Add a new question </Typography>
                
                <Paper style={{ padding: 10, marginTop: 50, marginBottom: 10, width: 400, height: 220}}>
                <Typography variant="headline" variant="headline"> Would you rather</Typography>
                <br />
                <br />
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        placeholder="first option"
                        value={this.state.optionOne}
                        onChange={this.handleFirstChange}
                        name="optionOne"
                        style={{width: 400}}
                    />
                    <br />
                    <br />
                    <TextField
                        placeholder="second option"
                        value={this.state.optionTwo}
                        onChange={this.handleSecondChange}
                        className='textfield'
                        style={{width: 400}}
                    />
                    <br />
                    <Button
                        variant="outlined"
                        type='submit'
                        disabled={optionOne === '' || optionTwo === ''}
                        style={{marginTop: 30}}
                    >
                        Submit
                    </Button>
                </form>
                </Paper>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(AddQuestion)