import React from "react";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <section className="py-[50px] bg-green text-white">
      <div className="container grid lg:grid-cols-2 gap-14 items-center">
        <div className=" flex flex-col gap-6 md:order-2">
          <h1 className="text-5xl capitalize">about</h1>
          <p className="text-xl leading-relaxed text-gray-200">
            Welcome to 'Buy the Dip Coin' (SEND), where we transform market dips
            into comedy gold. We fearlessly buy into the lows and ride the waves
            of laughter and profits. Join us in this hilarious journey of crypto
            investing and discover the thrill of turning dips into triumphs.
          </p>
          <p className="text-xl leading-relaxed text-gray-200">
            t SEND, we defy conventions and embrace the unpredictable nature of
            the crypto universe. With a dash of humor and a sprinkle of
            audacity, we navigate the ups and downs with a smile on our faces.
            Get ready to join our community of daring investors who know that
            laughter and profit go hand in hand.
          </p>
        </div>
        <img src={logo} alt="" className="md:order-1 md:w-[20rem] lg:w-full" />
      </div>
    </section>
  );
};

export default About;
