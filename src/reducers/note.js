const initialValue = []
const note = (state=initialValue, action) => {
    switch(action.type) {
        case 'SHOW_NOTE':
            return action.note
        default:
            return state
    }
}

export default note