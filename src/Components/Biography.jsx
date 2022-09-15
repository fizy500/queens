import React from "react";
import Rect6 from "../Assets/Rectangle6.png";
import Rect5 from "../Assets/Rectangle5.png";
import Rect7 from "../Assets/Rectangle7.png";
import Rect8 from "../Assets/Rectangle8.png";
import Arrow from "../Assets/ArrowRight.png";
export default function Biography() {
    return (
        <section className="px-10  flex justify-center items-center pt-20">
            <div className="flex flex-col justify-center  items-center gap-1 max-w-[640px] sm:max-w-[100%]  justify-items-center ">
                <div className="flex justify-between items-center  w-full pb-6">
                    <div>
                        <h2 className="text-[30px] font-bold uppercase text-[#1B1C1E]">biography</h2>
                        <p className="text-lg ">A short account of Queen elizabeth II's Life</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center gap-5 flex-wrap">
                        <div className="flex flex-col w-[400px] h-[300px] px-1">
                            <img src={Rect6} alt="" className="w-[100%]  aspect-[1.5]" />
                        </div>
                        <div className="flex flex-col  w-[400px] h-[300px] px-1">
                            <img src={Rect5} alt="" width="100%" />

                        </div>
                        <div>
                            <div className="flex flex-col    w-[400px] h-[300px] px-1 space-y-5">
                                <p className="text-[16px] text-[#1B1C1E]">
                                    Elizabeth Alexandra Mary Windsor was born in Mayfair, London, as the first child of the Duke & Duchess of York (later King George VI and Queen Elizabeth). Her father acceded to the throne in 1936 upon the abdication of his brother, King Edward VIII, making Elizabeth the heir presumptive. She was educated privately at home and began to undertake public duties during the Second World War, serving in the Auxiliary Territorial Service.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5 flex-wrap">
                        <div className="flex flex-col w-[400px] h-[400px] px-1 ">
                            <img src={Rect7} alt="" className="w-full aspect-square" />
                        </div>
                        <div className="flex flex-col  w-[400px] h-[400px] px-1 ">
                            <p className="text-[16px] ">In November 1947, she married Philip Mountbatten, a former prince of Greece and Denmark, and their marriage lasted 73 years until his death in April 2021. They had four children: Charles III; Anne, Princess Royal; Prince Andrew, Duke of York; and Prince Edward, Earl of Wessex. Elizabeth II was Queen of the United Kingdom from 6 February 1952 until her death in 2022. Her reign of 70 years and 214 days was the longest of any British monarch and the second-longest recorded of any monarch of a sovereign country. At the time of her death, Elizabeth was also Queen of 14 other Commonwealth realms in addition to the United Kingdom.</p>
                            <div>
                            <a href="" className="flex gap-1">See All<img src={Arrow} /></a>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col w-[400px] h-[400px] px-1 ">
                                <img src={Rect8} alt="" width="100%" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}