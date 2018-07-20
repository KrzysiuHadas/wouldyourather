import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared';

class AddQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
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

        this.setState(()=>({
            optionOne: '',
            optionTwo: ''
        }))
    }


    
    render() {
        const {optionOne, optionTwo} = this.state
        return (
            <div>
                <h2> Add a new question </h2>
                <h3> Would you rather</h3>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="First option"
                        value={this.state.optionOne}
                        onChange={this.handleFirstChange}
                        name="optionOne"
                    />

                     <textarea
                        placeholder="Second option"
                        value={this.state.optionTwo}
                        onChange={this.handleSecondChange}
                    />

                    <button
                        type='submit'
                        disabled={optionOne === '' || optionTwo === ''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }){
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(AddQuestion)