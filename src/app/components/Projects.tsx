import React from "react";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <div className="flex flex-col sm:gap-28 gap-12 sm:px-[32px] xl:px-[220px] px-[20px] py-20">
      <div className="flex justify-center relative">
        <h1 className="text-[10vw] sm:text-[50px] lg:text-[50px] font-bold sm:leading-[64px] z-10 text-[#457B9D]">
          Projects
          <p className="text-black justify-center">What I have made?</p>
        </h1>
      </div>
      <section className="mt-10">
        <div className="container px-5 py-20 mx-auto">
          {/* Container for Projects */}
          <div className="flex flex-wrap justify-center">
            {/* Project 1 */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  src="/pf.png"
                  alt="project"
                  width={800}
                  height={500}
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-black font-serif mt-5">
                𝗠𝗶𝗻𝗲 𝗣𝗼𝗿𝘁𝗳𝗼𝗹𝗶𝗼
              </h2>
              <p className="text-justify font-serif text-black mt-2">
              &quot;Showcasing a custom CSS portfolio, this fully responsive design adapts seamlessly across all devices. Whether viewed on desktop, tablet, or mobile, it offers an intuitive user experience with clean, elegant styling.&quot;
              </p>
              <Link
                href="https://portfolio-jqah.vercel.app/"
                className="text-black inline-flex items-center mt-3 font-bold font-serif"
                target="_blank"
              >
                Visit Project
              </Link>
            </div>

            {/* Project 2 */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  src="/wp.png"
                  alt="project"
                  width={900}
                  height={500}
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-black font-serif mt-5">
                WhitePeace 
              </h2>
              <p className="text-justify font-serif text-black mt-2">
              &quot;WhitePeace is a fully responsive website designed to provide a seamless experience across all devices. Whether you&apos;re browsing on a desktop, tablet, or mobile, this platform ensures smooth navigation and user-friendly design.&quot;
              </p>
              <Link
                href="https://responsive-website-vshe.vercel.app/"
                className="text-black inline-flex items-center mt-3 font-bold font-serif"
                target="_blank"
              >
                Visit Project
              </Link>
            </div>

            {/* Additional Projects - Boxes for more projects */}
            {/* Project 3 */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  src="/mk.png"
                  alt="project"
                  width={900}
                  height={500}
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-black font-serif mt-5">
                simple portfolio
              </h2>
              <p className="text-justify font-serif text-black mt-2">
              &quot;Designed using Tailwind CSS and based on Figma, this portfolio features a clean, minimalist design that showcases modern web aesthetics.
              The layout, though not responsive, focuses on the visual impact and functionality of the design.&quot;
              </p> <Link
                href="https://figma-portfolio-blush.vercel.app/"
                className="text-black inline-flex items-center mt-3 font-bold font-serif"
                target="_blank"
              >
                Visit Project
              </Link>
              
            </div>

            {/* Project 4 */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  src="/image 1.png"
                  alt="project"
                  width={900}
                  height={500}
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-black font-serif mt-5">
                Project 4
              </h2>
              <p className="text-justify font-serif text-black mt-2">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente dolores optio, inventore illo dolore adipisci? Earum sit laborum, ea natus error enim!
              </p>
            </div>

            {/* Project 5 */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  src="/image 1.png"
                  alt="project"
                  width={900}
                  height={500}
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-black font-serif mt-5">
                Project 5
              </h2>
              <p className="text-justify font-serif text-black mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente dolores optio, inventore illo dolore adipisci? Earum sit laborum, ea natus error enim!
              </p>
            </div>

            {/* Project 6 */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  src="/image 1.png"
                  alt="project"
                  width={900}
                  height={500}
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-black font-serif mt-5">
                Project 6
              </h2>
              <p className="text-justify font-serif text-black mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente dolores optio, inventore illo dolore adipisci? Earum sit laborum, ea natus error enim!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
