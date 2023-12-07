/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductWrapper from "./components/productWrapper";
import CartWrapper from "./components/CartWrapper";

function App() {
    const [show, setShow] = useState(true);
    return (
        <div>
            <Navbar setShow={setShow} />
            <main className="py-16">
                {show ? <ProductWrapper /> : <CartWrapper />}
            </main>
        </div>
    );
}

export default App;
