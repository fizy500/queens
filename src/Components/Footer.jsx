import React from "react";
import Logo from "../Assets/logo.png";
import Love from "../Assets/love.png";
export default function Footer() {
    return (
        <section className="flex flex-col justify-center items-center bg-[#1B1C1E] p-5">
            <div className="flex flex-col justify-center items-center gap-2 text-center">
                <img src={Logo} alt="" aria-hidden="true" />
                <h2 className="uppercase sm:text-[25px] text-white">queen elizabeth alexandra mary windsor</h2>
                <p className="text-lg text-[#E7E8E9] opacity-[0.5] flex gap-1">Forever in our hearts <img src={Love} className="w-[50px]"aria-hidden="true" alt="" /></p>
            </div>
        </section>
    )
}