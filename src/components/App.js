import React, { Component } from 'react'
import { _getUsers }  from '../utils/_DATA'


class App extends Component {


  componentDidMount() {
    _getUsers()
      .then((users) => {
        console.log(users)
      })
  }
  
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default App