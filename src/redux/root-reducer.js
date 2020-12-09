import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import {navItemsReducer} from './navitemreducer';

export default combineReducers({
    user: userReducer,
    nav: navItemsReducer
});