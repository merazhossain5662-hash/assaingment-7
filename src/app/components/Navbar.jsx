"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logImage from "@/assets/logo.png";
import { FiActivity } from 'react-icons/fi';
import { IoHomeOutline } from 'react-icons/io5';
import { BsClockHistory } from 'react-icons/bs';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathName =usePathname(); 
  console.log(pathName);
  
    return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link href="/" >
     <Image
      src={logImage}
      alt="Picture of the author"
      width={120}
      height={1000}
    />
    </Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1  space-x-1.5">
      <li><Link href="/" className={pathName === "/" ? " bg-[#244D3F] text-white" : ""}><IoHomeOutline />Home</Link></li>
      <li><Link href="/Timeline" className={pathName === "/Timeline" ? " bg-[#244D3F] text-white" : ""}><BsClockHistory />Timeline</Link></li>
      <li>
       <Link href="/conten" className={pathName === "/conten" ? " bg-[#244D3F] text-white" : ""}><FiActivity /> Stats</Link>
      </li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;