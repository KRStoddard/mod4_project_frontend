
//onSearch creates action to return search terms
export const onSearch = (search) =>{
    return {
        type: 'ON_SEARCH',
        search: search
    }
}