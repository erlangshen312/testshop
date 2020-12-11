import React from "react";
import {Link, NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav
            className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <Link to="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Главная</Link>
            </div>
            <div>
                <Link to="/checkout" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Корзина</Link>
            </div>
        </nav>
    );
}

export default Navbar;
