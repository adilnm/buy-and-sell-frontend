export default function(id){
    return (dispatch)=>{
        fetch(`http://localhost:3001/categories/${id}`,{
            credentials: 'include'
        })
            .then(res=>res.json())
            .then(posts=>{
                return  dispatch({type:'GET-POSTS', data:posts})
            })
    }
}