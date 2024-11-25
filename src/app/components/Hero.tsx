import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div>
      <div  className="sm:px-[32px] px-[20px] lg:h-screen bg-slate-300 relative">
      <div className="sm:flex items-center sm:h-[656px] sm:w-full sm:pt-0 pt-40">
        {/* Text Section */}
        <div className="flex-1 sm:text-start text-center sm:pt-20">
          <h1 className="text-slate-500 text-[12vw] sm:text-[50px] lg:text-[65px]  sm:leading-[72px]">
            Hi Everyone I&apos;am 
           
          </h1>
          <h2 className=' text-black font-bold text-[12vw] sm:text-[50px] lg:text-[65px]  sm:leading-[72px] '>Anousha Baig</h2>
          <p className="text-white lg:text-[18px] text-[18px] font-[300] mt-6">
          Passionate about Generative AI, Web 3.0, and the Metaverse, with expertise in full-stack development. I specialize in creating innovative, scalable web solutions that integrate emerging technologies to deliver exceptional user experiences. 
            </p>
            {/* Desktop Button */}
          <button className="sm:flex hidden items-center sm:mt-12 gap-2 bg-[#457B9D] text-[14px] text-white px-4 py-[14px] rounded-md">
            Explore More
          </button>

          {/* Mobile Button */}
          <div className="flex sm:justify-start justify-center sm:mb-0 mb-20  ">
            <button className="flex sm:hidden items-center mt-12 gap-2 bg-[#4F9CF9] hover:bg-white text-[14px] text-white px-6 py-4 rounded-md">
              More Explore
            </button>
          </div>
          </div>

          <div className="flex-1 flex justify-center sm:justify-end items-center">
          <div className="lg:w-[48vmax] sm:h-[30vmax] sm:w-[42vw] w-[90vw] h-full lg:mt-10 sm:mb-0 mb-20">
        
            <Image
              src="/girlpfo.png"
              alt="banner-image"
              width={100}    // Define width explicitly
              height={100}   // Define height explicitly
              layout='responsive'
              ></Image>
          </div>
        </div>
            
         </div>
         </div>
    </div>
  )
}

export default Hero
