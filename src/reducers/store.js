import { combineReducers } from "redux";
import {
  waiterOrder,
  waiterCategory,
  incrementNumberOfMeal,
  waiterOrderSelected,
} from "./waiterApp";
import { userStatus, userData } from "./isLogged";

export const allReducers = combineReducers({
  waiterOrderSelected: waiterOrderSelected,
  waiterOrder: waiterOrder,
  waiterCategory: waiterCategory,
  numberOfMeals: incrementNumberOfMeal,
  userLogin: userStatus,
  userData: userData,
});
