import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
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
            <Grid container className="center" spacing={24} justify="center" style={{marginTop: 100}}>
                {
                    arrayOfUsers.map((user) => (
                        <Grid item xs={1.4} >
                        <Paper>
                        <div key={user.id}>
                            <img src={user.avatarURL} width="125" height="125"/>
                            <br />
                            <button onClick={this.loginButtonClicked}
                                value={user.id}
                                className="btn">
                                @{user.id}
                            </button>
                        </div>
                        </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login)