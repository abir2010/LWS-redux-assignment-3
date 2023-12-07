/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductWrapper from "./components/productWrapper";
import CartWrapper from "./components/CartWrapper";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    const [show, setShow] = useState(true);
    return (
        <Provider store={store}>
            <Navbar setShow={setShow} />
            <main className="py-16">
                {show ? <ProductWrapper /> : <CartWrapper />}
            </main>
        </Provider>
    );
}

export default App;
