export default function(id){
    return (dispatch)=>{
        fetch(`https://young-springs-21220.herokuapp.com/categories/${id}`,{
            credentials: 'include'
        })
            .then(res=>res.json())
            .then(posts=>{
                return  dispatch({type:'GET-POSTS', data:posts})
            })
    }
}