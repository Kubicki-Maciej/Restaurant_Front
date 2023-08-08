import {combineReducers} from 'redux'
import { waiterOrder, waiterCategory, incrementNumberOfMeal } from './waiterApp'
// reducer import


export const allReducers = combineReducers({
    waiterOrder : waiterOrder,
    waiterCategory:waiterCategory,
    numberOfMeals:incrementNumberOfMeal
})

