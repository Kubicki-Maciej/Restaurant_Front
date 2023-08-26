export const incrementFood = () => {
  return {
    type: "INCREMENT_ITEM",
  };
};
export const decrementFood = () => {
  return {
    type: "DECREMENT_ITEM",
  };
};

export const addProduct = (food) => {
  return {
    type: "ADD_PRODUCT",
    payload: food,
  };
};

export const loadProductFromActiveOrder = (food) => {
  return {
    type: "LOAD_ORDER_FROM_ACTIVE_ORDERS",
    payload: food,
  };
};

export const goToCategory = (category) => {
  return {
    type: "GO_TO_CATEGORY",
    payload: {
      category_food_element: category,
      category_selected: true,
    },
  };
};

export const goBackToMenu = () => {
  return {
    type: "GO_TO_MENU_PAGE",
    payload: {
      category_food_element: [],
      category_selected: false,
    },
  };
};

export const setOrderExsist = (order) => {
  return {
    type: "ORDER_EXSIST",
    payload: {
      order_id: order,
    },
  };
};

export const cleanWaiterOrder = () => {
  return {
    type: "CLEAN_ORDER",
  };
};

export const cleanWaiterOrderSelected = () => {
  return {
    type: "ORDER_EXSIST_CLEAN",
  };
};
