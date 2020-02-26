import React, { Component } from 'react'

export default class Logout extends Component {

    logout(){
        fetch('http://localhost:3001/logout',{
            method:'DELETE',
            credentials: 'include'
        })
        
    }
    render() {
        return (
            <div>
                {this.logout()}
            </div>
        )
    }
}
