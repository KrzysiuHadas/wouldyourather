import React, { Component } from 'react';
import { connect } from 'react-redux'


class Question extends Component {

    render() {
        const {optionOne, optionTwo} = this.props
        return (
            <div>
                <h2>Would you rather: </h2>
                <ul>
                    <li>{optionOne}</li>
                    <li>{optionTwo}</li>
                </ul>
            </div>
        );
    }
};

function mapStateToProps( { questions }, { id } ) {
    const question = questions[id]

    return {
        optionOne: question.optionOne.text,
        optionTwo: question.optionTwo.text,
    }
}

export default connect(mapStateToProps)(Question)