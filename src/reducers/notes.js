
const initialValue = []
const notes = (state=initialValue, action) => {
    switch(action.type) {
        case 'SHOW_NOTES':
            return [...action.notes]
        
        default:
            return state
    }
}

export default notes 