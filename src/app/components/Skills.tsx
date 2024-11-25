import React from "react";
import Image from "next/image";

function Skills() {
  return (
    <div className="h-full bg-slate-300 flex justify-center items-center ">
      <div className=" flex flex-col sm:gap-28 gap-12 sm:px-[32px] xl:[220px] px-[20px] py-20">
          <div className="flex justify-center relative">
          <h1 className="text-[10vw] sm:text-[50px] lg:text-[50px] font-bold sm:leading-[64px] z-10 text-[#457B9D]">
            Skills
            <p className="text-black justify-center">What i capable of?</p>
          </h1>
           </div>

          <div className="flex sm:flex-row items-center sm:gap-0 gap-[18vw] flex-col sm:justify-between">
          <div className="sm:w-[10vmax] w-[40vw] h-[54px] flex items-center justify-center">
            <Image
              src="/tsss22.png"
              alt="logo"
              width={900}
              height={500}
              className="object-contain"
            ></Image>
          </div>
          <div className="sm:w-[19vmax] w-[44vw] h-10 flex items-center justify-center">
            <Image
              src="/logo_html 1.png"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            ></Image>
          </div>
          <div className="sm:w-[19vmax] w-[44vw] h-10  flex items-center justify-center">
            <Image
              src="/CSS-Logo 1.png"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            ></Image>
          </div>

          <div className="sm:w-[19vmax] w-[60vw] h-10  flex items-center justify-center">
            <Image
              src="/tailwindcss-logo 1.png"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            ></Image>
          </div>
          <div className="sm:w-[19vmax] w-[60vw] h-10  flex items-center justify-center">
            <Image
              src="/React-icon.svg.png"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            ></Image>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Skills;
