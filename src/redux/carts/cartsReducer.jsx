/* eslint-disable no-case-declarations */
import {
    ADDCART,
    DECREMENTCART,
    DELETECART,
    INCREMENTCART,
} from "./actionTypes";

const initialState = [];

const cartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDCART:
            if (state.length === 0) {
                return [...state, { ...action.payload, sqty: 1 }];
            } else {
                let flag = false;
                state.forEach((cart) => {
                    if (cart.id === action.payload.id) {
                        flag = true;
                    }
                });
                if (flag) {
                    return state.map((cart) => {
                        if (cart.id === action.payload.id) {
                            return {
                                ...cart,
                                sqty:
                                    cart.sqty >= parseInt(cart.qty)
                                        ? cart.sqty
                                        : cart.sqty + 1,
                            };
                        } else {
                            return {
                                ...cart,
                            };
                        }
                    });
                } else {
                    return [...state, { ...action.payload, sqty: 1 }];
                }
            }

        case DELETECART:
            return state.filter((cart) => cart.id !== action.payload);

        case INCREMENTCART:
            return state.map((cart) => {
                if (cart.id === action.payload) {
                    return {
                        ...cart,
                        sqty:
                            cart.sqty >= parseInt(cart.qty)
                                ? cart.sqty
                                : cart.sqty + 1,
                    };
                } else {
                    return { ...cart };
                }
            });

        case DECREMENTCART:
            return state.map((cart) => {
                if (cart.id === action.payload) {
                    return {
                        ...cart,
                        sqty: cart.sqty === 1 ? cart.sqty : cart.sqty - 1,
                    };
                } else {
                    return { ...cart };
                }
            });

        default:
            return state;
    }
};

export default cartsReducer;
