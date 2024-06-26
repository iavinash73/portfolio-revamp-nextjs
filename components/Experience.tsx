import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 ">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-white hover:bg-[#0d0f2b] duration-500 border border-slate-800 hover:border-purple group"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-3xl font-bold ">
                  {card.title}
                </h1>
                {/* <div className="text-start text-xl  font-bold   ">
                  {card.time}
                </div> */}
                <div className="flex justify-between gap-6 mt-4 items-center text-purple">
                  <div className="text-start text-[20px] font-semibold ">
                    {card.company}
                  </div>
                  <div className="text-start text-[16px] font-semibold">
                    {card.duration}
                  </div>
                </div>
                <p className="text-start md:text-[17px] leading-[27px] text-white duration-500 mt-10 font-medium whitespace-pre-line font-notoSans ">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
