
export const userStatus = (state=false, action)=>{
    switch(action.type){
        case 'USER_LOGIN':
            return true
        case 'USER_LOGOUT':
            return false
        default:
            return state
            

    }
};
const user = {
    id:'', 
    role:'', 
    status:'',
    last_login:'',
    username:'', 
    groups_name:[],
    groups:[]
}

export const userData = (state=user, action) =>{
    switch(action.type){
        case 'GET_USER_DATA':
            const userData = action.payload
            console.log(`get user data ${userData.id}`);
            console.log(state);
            return {
                ...state,
                id: userData.id,
                username: userData.username,
                role: userData.role,
                status: userData.status,
                last_login: userData.last_login,
                groups_name: userData.groups_name,
                groups: userData.groups
            }
        case 'CLEAR_USER_DATA':
            return state
        default:
            return state
    }
} 

export const userPermissions = (state={}, action) =>{
    switch (action.type){
        case 'userWaiter':
            return true
        case 'userKitchen':
            return true
        case 'userManager':
            return true
        case 'userAdmin':
            return true
    }
}

