export default function(){
    return dispatch=>{
        fetch(`https://young-springs-21220.herokuapp.com/loggedin`, {
            credentials: 'include'})
        .then(res=>res.json())
        .then(data=>{
            dispatch({ type: 'SIGN UP', data })
        })
    }
}