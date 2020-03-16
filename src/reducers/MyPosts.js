export default function (state = [], action) {
    switch (action.type) {
        case 'MY-POSTS':
            return action.posts
        case 'ADD-NEW-POST':
            return [...state, action.post]
        case 'EDIT-POST':
            const newState=state.filter(i=>i.id!==action.post.id)
            return [...newState, action.post]
        default:
            return state
    }
}