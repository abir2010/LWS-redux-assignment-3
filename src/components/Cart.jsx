/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import {
    decrementCart,
    deleteCart,
    incrementCart,
} from "../redux/carts/actions";
import { decrementProduct, incrementProduct } from "../redux/products/actions";

export default function Cart({ cart }) {
    const { id, title, catagory, price, imgUrl, qty, sqty } = cart;

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteCart(id));
    };

    const incCart = (id) => {
        dispatch(incrementCart(id));
        dispatch(decrementProduct(id));
    };

    const decCart = (id) => {
        dispatch(decrementCart(id));
        dispatch(incrementProduct(id));
    };

    return (
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
                {/* cart image */}
                <img className="lws-cartImage" src={imgUrl} alt="product" />
                {/* cart item info */}
                <div className="space-y-2">
                    <h4 className="lws-cartName">{title}</h4>
                    <p className="lws-cartCategory">{catagory}</p>
                    <p>
                        BDT <span className="lws-cartPrice">{price}</span>
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* amount buttons */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => incCart(id)}
                        className="lws-incrementQuantity"
                    >
                        <i className="text-lg fa-solid fa-plus" />
                    </button>
                    <span className="lws-cartQuantity">{sqty}</span>
                    <button
                        onClick={() => decCart(id)}
                        className="lws-decrementQuantity"
                    >
                        <i className="text-lg fa-solid fa-minus" />
                    </button>
                </div>
                {/* price */}
                <p className="text-lg font-bold">
                    BDT{" "}
                    <span className="lws-calculatedPrice">{sqty * price}</span>
                </p>
            </div>
            {/* delete button */}
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button
                    onClick={() => handleDelete(id)}
                    className="lws-removeFromCart"
                >
                    <i className="text-lg text-red-400 fa-solid fa-trash" />
                </button>
            </div>
        </div>
    );
}
