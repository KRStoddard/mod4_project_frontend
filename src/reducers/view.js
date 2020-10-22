
const view = (state="list", action) => {
    switch(action.type) {
        case 'VIEW_GRID':
            return "grid"
        case 'VIEW_LIST':
            return "list"
        default:
            return state
    }
}

export default view