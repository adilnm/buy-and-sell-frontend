import React, { Component } from 'react'
import { connect } from "react-redux";
import SignUp from '../actions/SignUp';
import  logout from "../actions/Logout";
class Logout extends Component {

    // logout(){
    //      fetch('http://localhost:3001/logout', {
    //         credentials: "include",
    //         method: "DELETE"
    //       }).then(()=>this.props.history.push('/'))
        
    // }
    render() {
        return (
            <div>
                {this.props.logout()}
                {this.props.history.push('/')}
            </div>
        )
    }
}

export default connect(null,{SignUp,logout})(Logout)