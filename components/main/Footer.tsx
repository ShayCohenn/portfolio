import React from "react";
import { RxGithubLogo } from "react-icons/rx";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="w-full text-white">
      <div className="font-bold text-[20px] text-center">
        Contact Information
      </div>
      <div className="flex flex-wrap justify-evenly gap-y-4 gap-x-12 py-12">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="flex flex-row items-center my-[15px] cursor-pointer z-[999999]">
          <FaInstagram />
          <span className="text-[15px] ml-[6px]">Instagram</span>
        </a>
        <a
          href="https://github.com/ShayCohenn"
          target="_blank"
          className="flex flex-row items-center my-[15px] cursor-pointer z-[999999]">
          <RxGithubLogo />
          <span className="text-[15px] ml-[6px]">Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/shaycohenn1/"
          target="_blank"
          className="flex flex-row items-center my-[15px] cursor-pointer z-[999999]">
          <FaLinkedinIn />
          <span className="text-[15px] ml-[6px]">Linkedin</span>
        </a>
        <p className="flex flex-row items-center my-[15px] z-[999999]">
          <CgMail />
          <span className="text-[15px] ml-[6px]">shay91847@gmail.com</span>
        </p>
        <p className="flex flex-row items-center my-[15px] z-[999999]">
          <FaSquarePhone />
          <span className="text-[15px] ml-[6px]">+972 52-851-2751</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
