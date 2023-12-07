import { useSelector } from "react-redux";
import Cart from "./Cart";

export default function Carts() {
    const carts = useSelector((state) => state.carts);
    return (
        <div className="space-y-6">
            {carts.map((cart) => (
                <Cart key={cart.id} cart={cart} />
            ))}
        </div>
    );
}
