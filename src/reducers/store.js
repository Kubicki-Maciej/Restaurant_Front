import {combineReducers} from 'redux'
import { waiterOrder, waiterCategory } from './waiterApp'
// reducer import


export const allReducers = combineReducers({
    waiterOrder : waiterOrder,
    waiterCategory:waiterCategory
})

