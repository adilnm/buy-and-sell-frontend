import React, { Component } from 'react'
import { connect } from "react-redux";
import SignUp from '../actions/SignUp';

class Logout extends Component {

    logout(){
        fetch('http://localhost:3001/logout', {
            credentials: "include",
            method: "DELETE"
          })
        
    }
    render() {
        return (
            <div>
                {this.logout()}
                {/* {this.props.history.push('/')} */}
            </div>
        )
    }
}

export default connect(null,{SignUp})(Logout)