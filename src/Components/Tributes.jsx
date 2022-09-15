import React from "react";
import Arrow2 from "../Assets/ArrowRight2.png";
import Buhari from "../Assets/buhari.png";
import Macron from "../Assets/macron.png";

export default function Tributes() {
    return (
        <section className="flex justify-center items-center pr-40 pl-40 bg-[#1B1C1E] mb-[.5px]">
            <div className="flex flex-col justify-between
             items-center py-10">
                <div className="w-full">
                    <div className=" flex justify-between items-center w-full">
                        <div className="">
                            <h2 className="text-[30px] font-bold uppercase text-white">Tributes</h2>
                            <p className="text-lg text-[#E7E8E9] py-3 opacity-[0.5] ">World leaders pay tributes to Queen Elizabeth</p>
                        </div>
                        <div className="">
                            <a href="" className="flex gap-1">See All<img src={Arrow2} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-40">
                    <div className="flex justify-between items-center flex-wrap gap-3">
                        <div className="">
                            <img src={Buhari} alt="" className="w-full" />
                            <p className="text-lg uppercase text-white ">Muhammadu Buhari</p>
                            <small className="text-[#E7E8E9] opacity-[0.5]">President of Nigeria</small>
                        </div>
                        <p className="w-[300px] text-[#E7E8E9] py-3 opacity-[0.5]">The story of modern Nigeria will never be complete without a chapter on Queen Elizabeth ll, a towering global personality and an outstanding leader. She dedicated her life to making her nation, the Commonwealth and the entire world a better place.”</p>
                    </div>
                    {/* Second tribute */}

                    <div className="flex justify-between items-center flex-wrap gap-3">
                        <div>
                            <img src={Macron} alt="" className="w-full" />
                            <p className="text-lg uppercase text-white ">Emmanuel Macron</p>
                            <small className="text-[#E7E8E9] opacity-[0.5]">President of France</small>
                        </div>


                        <p className="w-[300px] text-[#E7E8E9] py-3 opacity-[0.5]">“Her Majesty Queen Elizabeth II embodied the British nation’s continuity and unity for over 70 years. I remember her as a friend of France, a kind-hearted queen who has left a lasting impression on her country and her century.”</p>
                    </div>
                </div>
                {/* On mobile */}
                <div className="">
                    <a href="" className="flex gap-1">See All<img src={Arrow2} alt="" /></a>
                </div>
            </div>

        </section>
    )
}