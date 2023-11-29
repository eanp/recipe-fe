import {combineReducers} from 'redux'
import menu from './menu'
import auth from './auth'
import menu_edit from './menu_edit'
import menu_detail from './menu_detail'
import menu_delete from './menu_delete'
import menu_add from './menu_add'

const rootReducers = combineReducers({
	menu_add,
	menu_edit,
	menu_detail,
	menu_delete,
	menu,
	auth,
})

export default rootReducers