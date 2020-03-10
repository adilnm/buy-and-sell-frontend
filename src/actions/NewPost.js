export default function (post) {
    return dispatch => {
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            credentials: 'include',
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/json'
            // },
            body:post
        })
            .then(res => res.json())
            .then(post =>dispatch({ type: 'ADD-NEW-POST', post }))
            
    }
}