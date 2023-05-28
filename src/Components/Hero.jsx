import React from "react";
import dip from "../assets/dip.png";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import dextool from "../assets/dextool.svg";
import Etherscan from "../assets/etherscan-logo-circle 1.svg";
import { MdEmail } from "react-icons/md";
import uniswap from "../assets/uniswap-uni-logo 1.svg";

const Hero = () => {
  return (
    <section className="w-full py-[80px]">
      <div className="container flex flex-col gap-10 justify-center items-center">
        <img src={dip} alt="" className="md:w-[15rem] object-cover" />
        <h1 className="text-5xl capitalize text-center max-w-[500px] border-transparent bg-center">
          Embrace the Dip, Laugh to the Moon!
        </h1>
        <p className="max-w-[600px] text-center text-black/80">
          SEND: Ride the dips, laugh all the way to the moon. Join the crypto
          comedy revolution on Ethereum and turn market lows into hilarious
          highs with 'Buy the Dip Coin' (SEND). Buckle up for profits and
          laughter like never before!
        </p>
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
            href="maito:Yugifouga@gmail.com"
            className="h-14 w-14 bg-white flex justify-center items-center rounded-full"
          >
            <MdEmail className="text-green text-4xl" />
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
    </section>
  );
};

export default Hero;
