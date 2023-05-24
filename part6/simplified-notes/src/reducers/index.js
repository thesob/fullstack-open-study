import { combineReducers } from "redux"
import noteReducer from "./noteReducer"
import filterReducer from "./filterReducer"

export default combineReducers({
    notes: noteReducer,
    filter: filterReducer
})