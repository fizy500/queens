import React from "react";
import Logo from "../Assets/logo.png";

export default function Header() {
    return (
        <header className="sticky top-0 w-full  flex justify-between items-center pr-40 pl-40 pt-4 pb-4 shadow-md  bg-[#1B1C1E] z-50">
            <div>
                <img src={Logo} alt="logo" width="80%" />
            </div>
            <div className="sm:block hidden">
                <ul className="capitalize flex justify-between items-center gap-10 text-[#E7E8E9] opacity-[0.5] ">
                    <li className="hover:text-white">
                        <a href="#section-1" className=""> home</a>
                    </li>
                    <li className="hover:text-white"><a href="#section-2">biography</a></li>
                    <li className="hover:text-white"> <a href="#section-3">timeline</a></li>
                    <li className="hover:text-white"><a href="">gallery</a></li>
                    <li className="hover:text-white"><a href="#section-4">tributes</a> </li>
                    <li className="p-2 border-2 border-white hover:text-[#E7E8E9]"><a href=""> write tributes</a></li>
                </ul>

            </div>

        </header>
    );
}