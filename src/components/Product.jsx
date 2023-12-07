/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useDispatch } from "react-redux";
import { addCart, incrementCart } from "./../redux/carts/actions";
import { decrementProduct } from "../redux/products/actions";

export default function Product({ product }) {
    const { id, title, catagory, price, imgUrl, qty, sqty } = product;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addCart(product));
        dispatch(decrementProduct(id));
    };
    return (
        <div className="lws-productCard">
            <img className="lws-productImage" src={imgUrl} alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">{title}</h4>
                <p className="lws-productCategory">{catagory}</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">
                        BDT <span className="lws-price">{price}</span>
                    </p>
                    <p className="productQuantity">
                        QTY <span className="lws-quantity">{sqty}</span>
                    </p>
                </div>
                <button onClick={handleAddToCart} className="lws-btnAddToCart">
                    Add To Cart
                </button>
            </div>
        </div>
    );
}
