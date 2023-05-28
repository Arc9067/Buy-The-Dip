import React from "react";
import Logo from "../assets/logo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import dextool from "../assets/dextool.svg";
import Etherscan from "../assets/etherscan-logo-circle 1.svg";
import { MdEmail } from "react-icons/md";
import uniswap from "../assets/uniswap-uni-logo 1.svg";

const Footer = () => {
  return (
    <footer className="py-[20px] w-full bg-pink">
      <div className="container flex justify-center items-center flex-col gap-5">
        <img src={Logo} alt="" className="w-[5rem] object-cover" />
        <p className="text-3xl text-black/80">Yugifouga@gmail.com</p>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <a
            href="https://t.me/BuyTheDip_Erc20"
            className="h-14 w-14 bg-white flex justify-center items-center rounded-full"
          >
            <FaTelegramPlane className="text-green text-4xl" />
          </a>
          <a
            href="https://mobile.twitter.com/BuyTheDip_Erc"
            className="h-14 w-14 bg-white flex justify-center items-center rounded-full"
          >
            <AiOutlineTwitter className="text-green text-4xl" />
          </a>

          <a
            href=""
            className="h-14 w-14 bg-white flex justify-center items-center rounded-full"
          >
            <img src={dextool} alt="" className="w-[2rem] object-cover" />
          </a>
          <a
            href=""
            className="h-14 w-14 bg-white flex justify-center items-center rounded-full"
          >
            <img src={Etherscan} alt="" className="w-[2rem] object-cover" />
          </a>
          <a
            href=""
            className="h-14 w-14 bg-white flex justify-center items-center rounded-full"
          >
            <img src={uniswap} alt="" className="w-[2rem] object-cover" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
