
const search = (state="", action) => {
    switch(action.type) {
        case 'ON_SEARCH':
            return action.search
        default:
            return state
    }
}

export default search 