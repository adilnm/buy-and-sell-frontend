export default function(){
    return dispatch=>{
        fetch('https://young-springs-21220.herokuapp.com/logout', {
            credentials: "include",
            method: "DELETE"
          }).then(()=>{
            dispatch({ type: 'SIGN UP', data:{logged_in: false} })
          })
    }
}