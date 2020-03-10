export default function(state=[],action){
    switch (action.type) {
        case 'MY-POSTS':
            return action.posts
        case 'ADD-NEW-POST':
            return [...state, action.post]
        default:
            return state
    }
}