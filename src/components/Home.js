import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Posts from './Posts';
import Navbar from './Navbar';

class Home extends Component {
    
    componentDidMount=()=>{
        
    }
    render() {
        return (
            <div>
                <Navbar/>
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