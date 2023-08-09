import {combineReducers} from 'redux'
import { waiterOrder, waiterCategory, incrementNumberOfMeal } from './waiterApp'
import { userStatus, userData } from './isLogged'


export const allReducers = combineReducers({
    waiterOrder : waiterOrder,
    waiterCategory:waiterCategory,
    numberOfMeals:incrementNumberOfMeal,
    userLogin: userStatus,
    userData: userData,
})

