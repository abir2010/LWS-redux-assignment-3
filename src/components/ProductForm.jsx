/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/actions";

export default function ProductForm() {
    const [id, setId] = useState(1);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const productData = {};

        const formElement = e.target;
        for (let i = 0; i < formElement.elements.length; i++) {
            const element = formElement.elements[i];
            if (element.name) {
                productData[element.name] = element.value;
            }
        }
        productData["id"] = id;
        productData["sqty"] = productData.qty;
        // dispatch
        dispatch(addProduct(productData));

        formElement.reset();
        setId((prevId) => prevId + 1);
    };
    return (
        <div>
            <div className="formContainer">
                <h4 className="formTitle">Add New Product</h4>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-[#534F4F]"
                    id="lws-addProductForm"
                >
                    {/* product name */}
                    <div className="space-y-2">
                        <label htmlFor="lws-inputName">Product Name</label>
                        <input
                            name="title"
                            className="addProductInput"
                            id="lws-inputName"
                            type="text"
                            required
                        />
                    </div>
                    {/* product category */}
                    <div className="space-y-2">
                        <label htmlFor="lws-inputCategory">Category</label>
                        <input
                            name="catagory"
                            className="addProductInput"
                            id="lws-inputCategory"
                            type="text"
                            required
                        />
                    </div>
                    {/* product image url */}
                    <div className="space-y-2">
                        <label htmlFor="lws-inputImage">Image Url</label>
                        <input
                            name="imgUrl"
                            className="addProductInput"
                            id="lws-inputImage"
                            type="text"
                            required
                        />
                    </div>
                    {/* price & quantity container */}
                    <div className="grid grid-cols-2 gap-8 pb-4">
                        {/* price */}
                        <div className="space-y-2">
                            <label htmlFor="ws-inputPrice">Price</label>
                            <input
                                name="price"
                                className="addProductInput"
                                type="number"
                                id="lws-inputPrice"
                                required
                            />
                        </div>
                        {/* quantity */}
                        <div className="space-y-2">
                            <label htmlFor="lws-inputQuantity">Quantity</label>
                            <input
                                name="qty"
                                className="addProductInput"
                                type="number"
                                id="lws-inputQuantity"
                                required
                            />
                        </div>
                    </div>
                    {/* submit button */}
                    <button
                        type="submit"
                        id="lws-inputSubmit"
                        className="submit"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
}
