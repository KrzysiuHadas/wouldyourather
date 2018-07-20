import React, { Component } from 'react';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'

class Question extends Component {

    render() {
        const {optionOne, optionTwo} = this.props
        return (
            <div width="400" >
                <Typography variant="headline"  component="h3">Would you rather: </Typography >
                <ol>
                    <li> <Typography component="p"> {optionOne} </Typography> </li>
                    <li> <Typography component="p"> {optionTwo} </Typography> </li>
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