import Carts from "./Carts";
import Bills from "./Bills";

export default function CartWrapper() {
    return (
        <div className="container 2xl:px-8 px-2 mx-auto">
            <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
            <div className="cartListContainer">
                <Carts />
                <Bills />
            </div>
        </div>
    );
}
