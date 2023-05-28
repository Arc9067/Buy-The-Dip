import React from "react";
import Wojak from "../assets/img3.png";

const Tokenomics = () => {
  return (
    <section className="py-[50px] w-full bg-white">
      <div className="container grid lg:grid-cols-3 items-center gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl text-green capitalize">tokenomics</h1>
          <div className="flex items-center  gap-4 flex-wrap">
            <h2 className="text-2xl capitalize">contarct address:</h2>
            <p className="text-secondary capitalize text-xl">
              000000000000000000
            </p>
          </div>
          <div className="flex items-center  gap-4">
            <h2 className="text-2xl capitalize">name:</h2>
            <p className="text-secondary capitalize text-xl">buy the dip</p>
          </div>
          <div className="flex items-center  gap-4">
            <h2 className="text-2xl capitalize">ticker:</h2>
            <p className="text-secondary capitalize text-xl">$SEND</p>
          </div>
          <div className="flex items-center  gap-4">
            <h2 className="text-2xl capitalize">supply:</h2>
            <p className="text-secondary capitalize text-xl">1,000,000</p>
          </div>
          <div className="flex items-center  gap-4">
            <h2 className="text-2xl capitalize">initial mc:</h2>
            <p className="text-secondary capitalize text-xl">$3,000</p>
          </div>
          <div className="flex items-center  gap-4">
            <h2 className="text-2xl capitalize">tax:</h2>
            <p className="text-secondary capitalize text-xl">0%</p>
          </div>
          <div className="flex items-center  gap-4">
            <h2 className="text-2xl capitalize">slippage:</h2>
            <p className="text-secondary capitalize text-xl">0%-4%</p>
          </div>
        </div>
        <img src={Wojak} alt="" className="md:col-span-2" />
      </div>
    </section>
  );
};

export default Tokenomics;
