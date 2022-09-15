import React from "react";
import Rect6 from "../Assets/Rectangle6.png";
import Rect9 from "../Assets/Rectangle9.png";
import Arrow from "../Assets/ArrowRight.png";
import Timeline3 from "../Assets/timelineThree.png";
export default function Timeline() {
    return (
        <section className=" flex justify-center items-center mt-20">
            <div className="flex flex-col justify-center items-center space-y-5 py-10">
                <div className="">
                    <div className="flex justify-between w-full">
                        <div className=" ">
                            <h2 className="text-[30px] font-bold uppercase text-[#1B1C1E]">timeline</h2>
                            <p className="text-lg] text-[#1B1C1E]">Key dates in the life of the Queen, from her birth in April 1926 to her death in September 2022</p>
                        </div>
                        <div className="  ">
                            <a href="" className="flex gap-1">See All<img src={Arrow} className="w-4" alt="" /></a>
                            
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-20 flex-wrap">
                    {/*rrrr  */}

                    <div className="flex flex-col border-l border-black border-r w-[350px] h-[650px] px-5 space-y-5">
                        <img src={Rect6} alt="" width="100%" />
                        <div className="flex justify-center items-start gap-2">
                            <p className="text-[25px] font-bold 1B1C1E">
                                1926
                            </p>
                            <p className="text-[16px] p-1 text-[#1B1C1E]">
                                On the 21st of April, 1926, Princess Elizabeth Alexandra Mary Windsor is born at 2.40am at 17 Bruton Street, London, her maternal grandparents’ house. It was home to her parents, Elizabeth and Albert, Duke of York, the second son of King George V and Queen Mary. She was third in line to the throne behind her father and Edward, Prince of Wales.
                            </p>
                        </div>




                        {/*  */}



                    </div>

                    <div className="flex flex-col border-l border-black border-r w-[350px] h-[650px] px-5 space-y-5">
                        <img src={Rect9} alt="" width="100%" />
                        <div className="flex justify-center items-start gap-2">
                            <p className="text-[25px] font-bold 1B1C1E">
                                1930s
                            </p>
                            <p className="text-[16px] text-[#1B1C1E] ">
                                In August 1930, Elizabeth’s sister, Princess Margaret Rose, is born. On the 20th of January 1936, George V dies. Edward VIII becomes king. On the 10th of December 1936, Edward VIII abdicates so that he can marry the American divorcee Wallis Simpson. In 1937, Elizabeth becomes a Girl Guide at the age of 11.
                            </p>
                        </div>

                    </div>
                    {/* Here */}
                    <div>
                        <div className="flex flex-col border-l border-black border-r w-[350px] h-[620px] px-5 space-y-5">
                            <img src={Timeline3} alt="" width="100%" />
                            <div className="flex justify-center items-start gap-2">
                                <p className="text-[25px] font-bold 1B1C1E">
                                    1940s
                                </p>
                                <p className="text-[16px] text-[#1B1C1E]">
                                    On the 13th of October, 1940, Elizabeth makes her first broadcast to the nation. On the 21st of April 1942, on her 16th birthday, Elizabeth carries out her first public engagement when she inspects the Grenadier Guards, of which she had been appointed colonel-in-chief. In 1944, she receives her first corgi, Susan, as an 18th birthday present.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
                {/*  */}

            </div>

        </section>
    )
}