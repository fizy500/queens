import React from "react";
import Logo from "../Assets/logo.png";
export default function Footer() {
    return (
        <section className="flex flex-col justify-center items-center bg-[#1B1C1E]  p-5">
            
            
            <div className="flex flex-col justify-center items-center gap-2 text-center">
                <hr />
                <img src={Logo} alt="" />
                <h2 className="uppercase text-[25px] text-white">queen elizabeth alexandra mary windsor</h2>
                <p className="text-lg text-[#E7E8E9] opacity-[0.5]">Forever in our hearts</p>
            </div>
        </section>
    )
}