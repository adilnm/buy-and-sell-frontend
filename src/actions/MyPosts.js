export default ()=>{
    return dispatch=>{
        fetch(`http://localhost:3001/myposts`, {
            credentials: 'include'})
        .then(res=>res.json())
        .then(posts=>{
            debugger
           dispatch({ type: 'MY-POSTS', posts })
        })
    }
}