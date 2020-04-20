export default ()=>{
    console.log('c')
    return dispatch=>{
        fetch(`https://young-springs-21220.herokuapp.com/myposts`, {
            credentials: 'include'})
        .then(res=>res.json())
        .then(posts=>{
            console.log('d')
           dispatch({ type: 'MY-POSTS', posts })
        })
    }
    console.log('e')
}