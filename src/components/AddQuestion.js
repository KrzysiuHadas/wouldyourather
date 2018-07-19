import React, { Component } from 'react'
import { connect } from 'react-redux'

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



        console.log("optionOne ", this.state.optionOne)
        console.log("optionTwo ", this.state.optionTwo)

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

export default connect()(AddQuestion)