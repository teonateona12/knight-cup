import React from "react";
import Header from "../../components/Header";
import ChessFigures from "../../assets/chess-figures.jpg";

export default function Personal() {
  return (
    <div className="flex">
      <div className="relative w-[48%]">
        <Header />
        <img src={ChessFigures} alt="" />
        <div className="absolute top-[295px] left-[132px] font-nunito">
          <p className="font-extrabold italic text-[26px] leading-9 uppercase  text-black ">
            “When you see a good move,
            <br /> look for a better one.”
          </p>
          <p className="font-medium italic text-2xl uppercase text-[#E5E6E8] mt-[24px]">
            -Emanuel Lasker
          </p>
        </div>
      </div>
      <div className="w-[52%]">
        <div className="py-[30px] pl-[48px] border-b border-b-[#B9B4C34D]/[0.3]">
          <h3 className="font-['Open_Sans'] font-semibold text-base/[150%] capitalize text-black">
            Start creating your account
          </h3>
        </div>
        <div>
          <div className="flex items-center pl-[107px]">
            <p className="flex items-center justify-center w-[40px] h-[40px] border border-[#E5E6E8] rounded-lg font-open-sans font-bold text-base/[25px]">
              1
            </p>
            <div className="w-[174px] h-px bg-[#B9B4C34D]/[0.3]"></div>
            <p className="flex items-center justify-center w-[40px] h-[40px] border border-[#E5E6E8] rounded-lg font-open-sans font-bold text-base/[25px]">
              2
            </p>
          </div>
          <div className="flex gap-[77px] pl-12 font-open-sans font-normal text-base/[150%]">
            <p>Personal information</p>
            <p>Chess experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
