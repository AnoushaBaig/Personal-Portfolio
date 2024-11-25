import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Header() {
  return (
    <div>
        <div className="navbar z-50 2xl:px-[220px] sm:px-[32px] px-[20px] bg-slate-300 text-black fixed sm:py-[14px] flex justify-between items-center w-full">
      <div className="navbar-start">
        <Image src="/24.png" alt="logo" width={100} height={100} ></Image>
        </div>
      <div className="navbar-center lg:flex items-center justify-between font-bold">
        <ul className="menu menu-horizontal px-1 gap-8 text-[1.2vw] flex">
          <Link href="/home"> <li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/skills"><li>Skills</li></Link>
          <Link href="/project"><li>Project</li></Link>
          <Link href="/contact"><li>Contact</li></Link>
          </ul>
       
          </div>
        </div>
      
    </div>
  )
}

export default Header
