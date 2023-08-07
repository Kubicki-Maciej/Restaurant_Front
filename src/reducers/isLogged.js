export const userLogged = (state=false, action)=>{
    switch(action.type){
        case 'userLogin':
            return !state

    }
};

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

