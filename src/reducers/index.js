import {combineReducers} from 'redux'
import notes from './notes'
import note from './note'
import users from './users'

export default combineReducers({
    notes,
    note,
})