import React, { Component } from 'react'
import { connect } from 'react-redux'

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
            <table border="1" cellPadding="0" cellSpacing="0" width="500">
                <tr>
                    <td>Name</td>
                    <td>Avatar</td>
                    <td>Answered questions</td>
                    <td>Asked questions</td>
                </tr>
                {
                    arrayOfFormattedUsers.map((user) => (
                        <tr>
                            <td>{user.name}</td>
                            <td>Avatar</td>
                            <td>{user.numberOfAnswers}</td>
                            <td>{user.numberOfQuestionsAsked}</td>
                        </tr>
                    ))
                }

            </table>
        )
    }
}


function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Leaderboard)