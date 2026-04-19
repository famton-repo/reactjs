import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full pt-10 text-white z-50">
            <div className="container">
                <div className="flex justify-between items-center">
                    {/*logo section*/}
                    <h1 className="text-2xl font-semibold uppercase tracking-wider">
                        <span className="text-primary mr-1">Coders</span>
                        Coffee.
                    </h1>
                    {/*Hamburger menu section*/}
                    <div>
                        <GiHamburgerMenu className="text-3xl cursor-pointer" />
                    </div>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;