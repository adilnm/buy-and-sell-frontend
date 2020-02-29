import React from 'react'

export default function Post({posts,match}) {
    const postId=match.params.postId
    const post=posts.find(post=>post.id==postId)
    debugger
    return (
        <div>
           {post.description}
        </div>
    )
}
