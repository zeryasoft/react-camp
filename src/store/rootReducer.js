//tüm statelerin toplandığı yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer=combineReducers({
    cart:cartReducer,
    //user:userReducer gibi  varsa başka reducerlar devam edebilir
})

export default rootReducer;