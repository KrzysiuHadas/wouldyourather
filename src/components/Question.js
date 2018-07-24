import React, { Component } from 'react';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'

class Question extends Component {

    render() {
        const {optionOne, optionTwo} = this.props
        return (
            <div>
                <Typography variant="headline" variant="subheading">Would you rather: </Typography >
                <ol>
                    <li> <Typography variant="body2"> {optionOne} </Typography> </li>
                    <li> <Typography variant="body2"> {optionTwo} </Typography> </li>
                </ol>
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