import {combineReducers} from 'redux'
import restaurantReducer from './restaurantReducer'
import onedayofferReducer from './onedayofferReducer'
import restaurantAdminReducer from './RestaurantAdminReducer'
export default combineReducers({restaurantReducer,onedayofferReducer,restaurantAdminReducer})