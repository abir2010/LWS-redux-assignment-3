import { ADDPRODUCT, DECREMENTPRODUCT, INCREMENTPRODUCT } from "./actionTypes";

const initialState = [];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            return [...state, action.payload];
        case INCREMENTPRODUCT:
            return state.map((prod) => {
                if (prod.id === action.payload) {
                    return {
                        ...prod,
                        sqty:
                            prod.sqty + 1 >= parseInt(prod.qty)
                                ? prod.sqty
                                : prod.sqty + 1,
                    };
                } else {
                    return { ...prod };
                }
            });
        case DECREMENTPRODUCT:
            return state.map((prod) => {
                if (prod.id === action.payload) {
                    return {
                        ...prod,
                        sqty: prod.sqty === 0 ? prod.sqty : prod.sqty - 1,
                    };
                } else {
                    return { ...prod };
                }
            });
        default:
            return state;
    }
};

export default productsReducer;
