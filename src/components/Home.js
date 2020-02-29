import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    
    allPosts(){
        const posts=this.props.posts
        return posts.length>0?posts:null
    }
    render() {
        return (
            <div>
                <Link to="/login">Login</Link><br/>
                <Link to="/signup">Sign Up</Link>
                {this.props.posts.length>0?this.props.posts[0].description:null}
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