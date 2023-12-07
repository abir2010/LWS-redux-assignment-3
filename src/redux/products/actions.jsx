import { ADDPRODUCT, DECREMENTPRODUCT, INCREMENTPRODUCT } from "./actionTypes";

export const addProduct = (productData) => {
    return {
        type: ADDPRODUCT,
        payload: productData,
    };
};

export const incrementProduct = (id) => {
    return {
        type: INCREMENTPRODUCT,
        payload: id,
    };
};

export const decrementProduct = (id) => {
    return {
        type: DECREMENTPRODUCT,
        payload: id,
    };
};
