import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";

const myLogger = (store) => (next) => (action) => {
    const state = store.getState();
    console.log("before:");
    console.log(state);
    const upState = [action].reduce(rootReducer, state);
    console.log("After:");
    console.log(upState);

    return next(action);
};

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;
