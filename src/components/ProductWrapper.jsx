import ProductForm from "./ProductForm";
import Products from "./Products";

export default function ProductWrapper() {
    return (
        <div className="productWrapper">
            <Products />
            <ProductForm />
        </div>
    );
}
