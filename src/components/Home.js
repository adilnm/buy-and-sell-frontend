import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Posts from './Posts';

class Home extends Component {
    

    render() {
        return (
            <div>
                <Link to="/login">Login</Link><br/>
                <Link to="/signup">Sign Up</Link><br/>
                <Link to="/createPost">Create a Post</Link><br/>
                <Link to="/logout">Logout</Link>
                {this.props.posts.length>0?<Posts posts={this.props.posts}/>:null}
            </div>
        )
    }
}

const mstp=(state)=>{
    return {
        posts:state.posts
    }
}

export default connect(mstp)(Home)