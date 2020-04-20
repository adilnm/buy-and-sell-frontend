import { push } from 'react-router-redux';

export default function (post,ownProps) {
    return (dispatch) => {
        fetch('https://young-springs-21220.herokuapp.com/posts', {
            method: 'POST',
            credentials: 'include',
            body:post
        })
            .then(res => res.json())
            .then(post =>dispatch({ type: 'ADD-NEW-POST', post }))
            .then(()=>{ownProps.history.push('/myposts')})

            
    }
}