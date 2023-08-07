const order = {
    ordered_items: []
}
export const waiterOrder = (state=order,action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':
            const item = action.payload
            return {
                ...state,
                ordered_items:[...state.ordered_items, item]
            }
        case 'REMOVE_PRODUCT':
            return state +2
        case 'CHANGE_PRODUCT_NUMBER':
        //         orders: state.orders.map((order) =>
        //   order.id === action.payload.id? action.payload : order
            return state +3
        default:
            return state
    }
};


const category = {
    category_food_element:[],
    category_selected: false
}

export const waiterCategory = (state=category, action)=>{
    switch(action.type){
        case 'GO_TO_CATEGORY':
            return state.category_food_element = action.payload
        case 'GO_TO_MENU_PAGE':
            return {...state, category_selected:false, category_food_element:[]}
        default:
            return state
    }
}

// export const screenMenuSelect = (state={}, action)=>{

// }