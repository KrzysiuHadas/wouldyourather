import React, { Component } from 'react'
import { connect } from 'react-redux'


class Login extends Component {

    render() {
        const { users } = this.props
        console.log("moje userki świruski hehehhee, ", users);
        return (
            <div>
                {
                    Object.keys(users).forEach(function (key) {
                        return (<p>{key}</p>)
                    }, this)
                }
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login)