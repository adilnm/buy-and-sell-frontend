import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HomePost from './HomePost';

export default class Posts extends Component {
    render() {
        const { posts } = this.props
        return (
            <div className="container">
                <div className="row">

                    {posts.map(post =><HomePost post={post}/> )}
                    </div>
                </div>
                )
            }
        }
        
        
{/* <ul>
                {posts.map(post=>
                   <Link key={post.id} to={`/posts/${post.id}`}><li>{post.title}</li></Link>
                )}
                </ul> */}