export default function(state=[], action){
    switch (action.type) {
        case "SIGN UP":
            return [...state, action.preload]
    
        default:
            return state
    }
}