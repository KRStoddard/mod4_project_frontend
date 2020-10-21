import {combineReducers} from 'redux'
import notes from './notes'
import note from './note'
import user from './user'

export default combineReducers({
    notes,
    note,
    user,
})