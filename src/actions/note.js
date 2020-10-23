
//shownote creates action to display single note
export const showNote = (note) => {
    return {
        type: 'SHOW_NOTE',
        note: note
    }
}