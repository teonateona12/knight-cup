import React from "react";
import backBoard from "../../assets/unsplash.jpg";
import rocket from "../../assets/Succsess rocket.jpg";
import Header from "../../components/Header";

export default function Complated() {
  return (
    <div className="flex ">
      <div className="w-[48%] ">
        <Header />
        <img src={backBoard} alt="" />
      </div>
      <div className="w-[52%] flex flex-col items-center justify-center">
        <img src={rocket} alt="" />
        <p className="text-[36px] font-nunito font-extrabold not-italic text-[#000] leading-[150%] mt-[16px]">
          Onboarding completed!
        </p>
      </div>
    </div>
  );
}
