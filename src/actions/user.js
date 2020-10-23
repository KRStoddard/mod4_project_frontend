
//onLogin creates action to log user in 
export const onLogin = (user) => {
    return {
        type: 'ON_LOGIN',
        user: user
    }
}

//onLogout creates action to log user out
 export const onLogout = () => {
    return {
        type: 'ON_LOGOUT'
    }
}



