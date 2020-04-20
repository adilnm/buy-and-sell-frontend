export default function (post){
    return dispatch => {
        fetch(`https://young-springs-21220.herokuapp.com/posts/${post.id}`, {
            method: 'DELETE',
            credentials: 'include'
            
        })
        .then(res=>res.json())
        .then(json=>{ 
            dispatch({type:'DELETE-POST',data:json })
        })
    }
}