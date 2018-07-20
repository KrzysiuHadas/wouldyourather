import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

    loginButtonClicked = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(setAuthedUser(e.target.value))
    }

    render() {

        const { users } = this.props
        let arrayOfUsers = []
        users && Object.keys(users).forEach(function (key) {
            arrayOfUsers.push(users[key])
        })
        return (
            <div>
                {
                    arrayOfUsers.map((user) => (
                        <div key={user.id}>
                            <img src={user.avatarURL} width="125" height="125" />
                            <p>{user.id}</p>
                            <button onClick={this.loginButtonClicked}
                                value={user.id}>
                                Login
                            </button>
                        </div>
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login)