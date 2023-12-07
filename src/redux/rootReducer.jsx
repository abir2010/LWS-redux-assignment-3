import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import cartsReducer from "./carts/cartsReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    carts: cartsReducer,
});

export default rootReducer;
