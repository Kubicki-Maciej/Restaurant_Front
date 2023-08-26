export const incrementNumberOfMeal = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT_ITEM":
      return state + 1;
    case "DECREMENT_ITEM":
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    default:
      return (state = 1);
  }
};

const order = {
  ordered_items: [],
};

export const waiterOrder = (state = order, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const item = action.payload;
      const existItem = state.ordered_items.find((i) => i.id === item.id);
      if (existItem) {
        console.log("item istnieje");
        let newValue = existItem.number_of_meals + item.number_of_meals;
        return {
          ...order,
          ordered_items: state.ordered_items.map((i) =>
            i.id === item.id ? item : i
          ),
        };
      } else {
        return {
          ...state,
          ordered_items: [...state.ordered_items, item],
        };
      }

    case "REMOVE_PRODUCT":
      return state + 2;
    case "CHANGE_PRODUCT_NUMBER":
      //         orders: state.orders.map((order) =>
      //   order.id === action.payload.id? action.payload : order
      return state + 3;

    case "LOAD_ORDER_FROM_ACTIVE_ORDERS":
      const items = action.payload;

      return {
        ...order,
        ordered_items: items,
      };
    case "CLEAN_ORDER":
      return order;

    default:
      return state;
  }
};

const category = {
  category_food_element: [],
  category_selected: false,
};

export const waiterCategory = (state = category, action) => {
  switch (action.type) {
    case "GO_TO_CATEGORY":
      return (state.category_food_element = action.payload);
    case "GO_TO_MENU_PAGE":
      return { ...state, category_selected: false, category_food_element: [] };
    default:
      return state;
  }
};

const orderExist = {
  exsist: false,
  order_id: 0,
};

export const waiterOrderSelected = (state = orderExist, action) => {
  switch (action.type) {
    case "ORDER_EXSIST": {
      const order = action.payload;
      return {
        ...orderExist,
        exsist: true,
        order_id: order,
      };
    }
    case "ORDER_EXSIST_CLEAN": {
      return orderExist;
    }
    default:
      return state;
  }
};

// export const screenMenuSelect = (state={}, action)=>{

// }
