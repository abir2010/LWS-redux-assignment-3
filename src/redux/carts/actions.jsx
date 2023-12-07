import {
    ADDCART,
    DECREMENTCART,
    DELETECART,
    INCREMENTCART,
} from "./actionTypes";

export const addCart = (productData) => {
    return {
        type: ADDCART,
        payload: productData,
    };
};

export const deleteCart = (id) => {
    return {
        type: DELETECART,
        payload: id,
    };
};

export const incrementCart = (id) => {
    return {
        type: INCREMENTCART,
        payload: id,
    };
};

export const decrementCart = (id) => {
    return {
        type: DECREMENTCART,
        payload: id,
    };
};
