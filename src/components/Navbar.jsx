/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import logoImg from "../assets/images/logo.png";

export default function Navbar({ setShow }) {
    const loadHome = () => setShow(true);
    const loadCart = () => setShow(false);

    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <a href="index.html">
                    <img src={logoImg} alt="LWS" className="max-w-[140px]" />
                </a>
                <div className="flex gap-4">
                    <a
                        href="#"
                        className="navHome"
                        id="lws-home"
                        onClick={loadHome}
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="navCart"
                        id="lws-cart"
                        onClick={loadCart}
                    >
                        <i className="text-xl fa-sharp fa-solid fa-bag-shopping" />
                        <span id="lws-totalCart">0</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
