export default ()=>{
    console.log('c')
    return dispatch=>{
        fetch(`http://localhost:3001/myposts`, {
            credentials: 'include'})
        .then(res=>res.json())
        .then(posts=>{
            console.log('d')
           dispatch({ type: 'MY-POSTS', posts })
        })
    }
    console.log('e')
}