export default function(){
    return (dispatch)=>{
        fetch("https://young-springs-21220.herokuapp.com/posts",{
            credentials: 'include'
        })
            .then(res=>res.json())
            .then(json=>{
                return  dispatch({type:'GET-POSTS', data:json})
            })
    }
}
