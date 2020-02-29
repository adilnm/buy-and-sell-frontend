export default function(){
    return (dispatch)=>{
        fetch("http://localhost:3001/posts")
            .then(res=>res.json())
            .then(json=>{
                return  dispatch({type:'GET-POSTS', data:json.posts})
            })
    }
}
