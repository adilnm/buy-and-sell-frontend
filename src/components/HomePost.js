import React from 'react'

export default function HomePost({post}) {
    return (
        <div className="card col-4">
        <img className="card-img-top" src={post.image ? post.image.url : ""} alt="Post image"></img>
        <div className="card-body">
            <h5 className="card-title"> {post.title}</h5>
            <p className="card-text">{post.description}</p>
        </div>
    </div>
    )
}
