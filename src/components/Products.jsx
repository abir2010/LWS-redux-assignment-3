import { useSelector } from "react-redux";
import Product from "./Product";

export default function Products() {
    const products = useSelector((state) => state.products);
    return (
        <div className="productContainer" id="lws-productContainer">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}
