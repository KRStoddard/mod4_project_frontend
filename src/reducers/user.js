


const user = (state={}, action) => {
    switch(action.type) {
        case 'ON_LOGIN':
            return action.user 
        case 'ON_LOGOUT':
            return {}
        default:
            return state
    }
}

export default user