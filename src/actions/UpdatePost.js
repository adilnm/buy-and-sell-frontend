export default function(post){
    return dispatch => {
        fetch(`https://young-springs-21220.herokuapp.com/${post.id}`, {
            method: 'PATCH',
            credentials: 'include',
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/json'
            // },
            body:post
        })
        .then(res=>res.json())
        .then(post=>{ 
            dispatch({ type: 'EDIT-POST', post })
        })
    }
}