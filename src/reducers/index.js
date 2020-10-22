import {combineReducers} from 'redux'
import notes from './notes'
import note from './note'
import user from './user'
import view from './view'
import search from './search'

export default combineReducers({
    notes,
    note,
    user,
    view,
    search
})