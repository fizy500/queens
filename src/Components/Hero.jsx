import React from "react";
import Logo from "../Assets/logo.png";
import Queen from "../Assets/queen.png";
export default function Hero() {
    return (
        <section className="flex flex-col justify-center items-center    sm:px-10 bg-black black  ">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-5 max-w-[640px] sm:max-w-[100%] px-10 ">
                <div className=" text-[#E7E8E9] w-1/2 h-1/2 space-y-2 flex flex-col justify-center items-center max-w-[200px] sm:max-w-[95%] min-w-max">
                    <div>
                        <img src={Logo} alt="" width="100%" height="120px" />
                    </div>
                    <h1 className="text-[60px] text-center uppercase">queen elizabeth II</h1>
                    <p className="text-lg  text-[#E7E8E9] opacity-[0.5] w-[550px] ">
                        "I have in sincerity pledged myself to your service, as so many of you are pledged to mine. Throughout all my life and with all my heart I shall strive to be worthy of your trust."
                    </p>
                    <div className="self-end text-right">
                        <p >-Queen Elizabeth Alexandra Mary Windsor</p>
                        <p className="">21 April 1926 - 8 September 2022</p>
                    </div>
                </div>
                <div className="">
                    <img src={Queen} alt="" className="w-full" height="100%" />
                </div>
            </div>
        </section>
    )
}