import React, { Component } from 'react'
import { connect } from "react-redux";
import SignUp from '../actions/SignUp';

class Logout extends Component {

    logout(){
        fetch('http://localhost:3001/logout',{
            method:'DELETE',
            credentials: 'include'
        }).then(res=>res.json())
          .then(json=>{
              this.props.SignUp(json)
          })
        
    }
    render() {
        return (
            <div>
                {this.logout()}
                {this.props.history.push('/')}
            </div>
        )
    }
}

export default connect(null,{SignUp})(Logout)