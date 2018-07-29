import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class Leaderboard extends Component {

    // TODO: add avatar to the table

    createNewUserObject = (user) => {
        const name = user.id
        const numberOfAnswers = Object.keys(user.answers).length
        const numberOfQuestionsAsked = user.questions.length
        const avatarURL = user.avatarURL
        return {
            name,
            avatarURL,
            numberOfAnswers,
            numberOfQuestionsAsked,
            score: numberOfAnswers + numberOfQuestionsAsked,
        }
    }


    render() {
        const { users } = this.props
        let arrayOfFormattedUsers = []

        if (users) {
            Object.keys(users).forEach(function (key) {
                let sss = this.createNewUserObject(users[key])
                arrayOfFormattedUsers.push(sss)
            }, this)
        }

        arrayOfFormattedUsers.sort(function (x, y) {
            return y.score - x.score;
        })

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Avatar</TableCell>
                            <TableCell>Answered questions</TableCell>
                            <TableCell>Asked questions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            arrayOfFormattedUsers.map((user) => (
                                <TableRow key={user.name}>
                                    <TableCell>@{user.name}</TableCell>
                                    <TableCell><img src={user.avatarURL} width="35" height="35" alt="avatar"/></TableCell>
                                    <TableCell>{user.numberOfAnswers}</TableCell>
                                    <TableCell>{user.numberOfQuestionsAsked}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}


function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Leaderboard)