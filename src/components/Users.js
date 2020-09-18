import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => (
      <li key={index}>{user.username}</li>
    ))
    
    return (
      <div>
        {this.props.noOfUsers}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    noOfUsers: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
