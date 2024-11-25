import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div>
       <div className="flex sm:flex-row sm:items-center sm:justify-center sm:mt-10 mt-10 flex-col-reverse">
                    <div className='sm:flex-1'>
                     <div className="relative flex items-center sm:justify-start justify-center sm:mt-0 mt-20 sm:pl-4">
          <div>
            <Image
              src="/wmm.avif"
              alt="round pict"
              width={670}
              height={200}
              ></Image>
          </div>
          </div>
          </div>
          <div className="sm:text-start text-center sm:justify-start sm:flex-1">
            <h1 className="sm:text-[6vw] text-[38px] font-[700] sm:leading-[85px] leading-tight lg:mt-4">
              About Me  </h1>
            <p className="text-[18px] font-[400] text-[#212529] lg:w-[80%] sm:mt-10 mt-6">
            Hi, I&apos;m Anousha Baig, a passionate developer with expertise in Next.js,
          React, and modern web technologies. I love building innovative and
          user-friendly applications.
            </p>
            <div className="flex sm:justify-start justify-center">
              <button className="flex items-center sm:mt-12 mt-16 gap-2 bg-[#4F9CF9] text-[16px] text-white px-7 py-[14px] rounded-md">
                Hire Me
              </button>
            </div>
          </div>
          </div>
    </div>
  )
}

export default About
