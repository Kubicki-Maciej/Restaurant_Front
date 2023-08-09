export const loginUser = () =>{
    return {
        type: 'USER_LOGIN'
    }
}

export const logoutUser = () =>{
    return {
        type : 'USER_LOGOUT'
    }
}

export const getUserData = (data) =>{
    return{
        type: 'GET_USER_DATA',
        payload: data
    }
}

export const clearUserData = () =>{
    return{
        type: 'CLEAR_USER_DATA'
    }
}