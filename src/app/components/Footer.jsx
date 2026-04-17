import Image from 'next/image';
import React from 'react';
import logImage from "@/assets/logo-xl.png";
import { TiSocialInstagram } from 'react-icons/ti';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-white pt-15 space-y-2 p-10">
  <aside>
    <Image
           src={logImage}
           alt="Picture of the author"
           width={270}
           height={250}
         />
    
    <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a className='text-lg bg-white text-black p-2 rounded-full'>
       <TiSocialInstagram />
      </a>
      <a className='text-lg bg-white text-black p-2 rounded-full'>
       <FaSquareFacebook />
      </a>
      <a className='text-lg bg-white text-black p-2 rounded-full'>
       <FaXTwitter />
      </a>
    </div>
  </nav>
</footer>
<footer className="footer sm:footer-horizontal bg-[#244D3F] text-gray-300 border-t border-gray-600 items-center px-9 p-4">
  <aside className="grid-flow-col items-center">
    
    <p> © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
     <p>Privacy Policy </p>
    </a>
    <a>
      <p>Terms of Service</p>
    </a>
    <a>
     <p>Cookies</p>
    </a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;
