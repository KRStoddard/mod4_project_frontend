
export const onLogin = (user) => {
    return {
        type: 'ON_LOGIN',
        user: user
    }
}

 export const onLogout = () => {
    return {
        type: 'ON_LOGOUT'
    }
}



