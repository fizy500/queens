import React from "react";
import Logo from "../Assets/logo.png";

export default function Header() {
    return (
        <header className="flex justify-between items-center pr-20 pl-20 pt-4 pb-4 shadow-md  bg-[#1B1C1E]">

            <div>
                <img src={Logo} alt="" width="80%" />
            </div>
            {/* <div className="sm:block">
                <ul className="capitalize flex justify-between items-center gap-10 text-[#E7E8E9] opacity-[0.5]">
                    <li>
                        <a href="#" className=""> home</a>
                    </li>
                    <li><a href="">biography</a></li>
                    <li> <a href="">timeline</a></li>
                    <li><a href="">gallery</a></li>
                    <li><a href="">tributes</a> </li>
                    <li className="p-2 border-2 border-white"><a href=""> write tributes</a></li>
                </ul>
            </div> */}

        </header>
    );
}