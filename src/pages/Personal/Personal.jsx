import React from "react";
import Header from "../../components/Header";
import ChessFigures from "../../assets/chess-figures.jpg";
import Check from "../../assets/check.svg";

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
          <div className="flex items-center pl-[107px] mt-[60px]">
            <p className="flex items-center justify-center w-[40px] h-[40px] border border-[#E5E6E8] rounded-lg font-open-sans font-bold text-base/[25px]">
              1
            </p>
            <div className="w-[174px] h-px bg-[#B9B4C34D]/[0.3]"></div>
            <p className="flex items-center justify-center w-[40px] h-[40px] border border-[#E5E6E8] rounded-lg font-open-sans font-bold text-base/[25px]">
              2
            </p>
          </div>
          <div className="flex gap-[77px] pl-12 font-open-sans font-normal text-base/[150%] mb-28">
            <p>Personal information</p>
            <p>Chess experience</p>
          </div>
          <div className="pl-[48px] mb-[85px]">
            <h1 className="font-open-sans font-semibold text-[32px]/[150%] text-[#000]">
              Personal information
            </h1>
            <p className="font-open-sans font-semibold text-[14px]/150%] capitalize text-[#95939A]">
              This is basic informaton fields
            </p>
          </div>
          <form action="" className="flex gap-10 flex-col pl-12 pr-[174px]">
            <div className="flex items-center py-2 pl-4 shadow-[inset_0_-1px_0_rgba(0,0,0,0.125)] rounded">
              <input
                type="text"
                placeholder="Name *"
                required
                className="w-[100%] outline-none"
              />
              <img src={Check} alt="" className="hidden mx-5" />
            </div>

            <div className="flex items-center py-2 pl-4 shadow-[inset_0_-1px_0_rgba(0,0,0,0.125)] rounded">
              <input
                type="email"
                placeholder="Email address *"
                required
                className="w-[100%] outline-none"
              />
              <img src={Check} alt="" className="hidden mx-5" />
            </div>

            <div className="flex items-center py-2 pl-4 shadow-[inset_0_-1px_0_rgba(0,0,0,0.125)] rounded">
              <input
                type="tel"
                placeholder="Phone number *"
                required
                className="w-[100%] outline-none"
              />
              <img src={Check} alt="" className="hidden mx-5" />
            </div>

            <div className="flex items-center py-2 pl-4 shadow-[inset_0_-1px_0_rgba(0,0,0,0.125)] rounded">
              <input
                type="number"
                placeholder="Date of birth *"
                required
                className="w-[100%] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:_textfield]"
              />
              <img src={Check} alt="" className="hidden mx-5" />
            </div>
            <div className="flex items-center justify-between font-open-sans font-normal text-xl/[27px]">
              <button className="py-[12px] px-[24px] text-black border border-black rounded-lg h-[53px]">
                Back
              </button>
              <button className="flex gap-3 bg-black text-[#fff] px-6 py-[13px] rounded-lg">
                Next
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 12.5C1.5 15.2848 2.60625 17.9555 4.57538 19.9246C6.54451 21.8938 9.21523 23 12 23C14.7848 23 17.4555 21.8938 19.4246 19.9246C21.3938 17.9555 22.5 15.2848 22.5 12.5C22.5 9.71523 21.3938 7.04451 19.4246 5.07538C17.4555 3.10625 14.7848 2 12 2C9.21523 2 6.54451 3.10625 4.57538 5.07538C2.60625 7.04451 1.5 9.71523 1.5 12.5ZM24 12.5C24 15.6826 22.7357 18.7348 20.4853 20.9853C18.2348 23.2357 15.1826 24.5 12 24.5C8.8174 24.5 5.76516 23.2357 3.51472 20.9853C1.26428 18.7348 0 15.6826 0 12.5C0 9.3174 1.26428 6.26516 3.51472 4.01472C5.76516 1.76428 8.8174 0.5 12 0.5C15.1826 0.5 18.2348 1.76428 20.4853 4.01472C22.7357 6.26516 24 9.3174 24 12.5ZM6.75 11.75C6.55109 11.75 6.36032 11.829 6.21967 11.9697C6.07902 12.1103 6 12.3011 6 12.5C6 12.6989 6.07902 12.8897 6.21967 13.0303C6.36032 13.171 6.55109 13.25 6.75 13.25H15.4395L12.219 16.469C12.1493 16.5387 12.094 16.6215 12.0562 16.7126C12.0185 16.8037 11.9991 16.9014 11.9991 17C11.9991 17.0986 12.0185 17.1963 12.0562 17.2874C12.094 17.3785 12.1493 17.4613 12.219 17.531C12.2887 17.6007 12.3715 17.656 12.4626 17.6938C12.5537 17.7315 12.6514 17.7509 12.75 17.7509C12.8486 17.7509 12.9463 17.7315 13.0374 17.6938C13.1285 17.656 13.2113 17.6007 13.281 17.531L17.781 13.031C17.8508 12.9613 17.9063 12.8786 17.9441 12.7874C17.9819 12.6963 18.0013 12.5987 18.0013 12.5C18.0013 12.4013 17.9819 12.3037 17.9441 12.2125C17.9063 12.1214 17.8508 12.0387 17.781 11.969L13.281 7.469C13.2113 7.39927 13.1285 7.34395 13.0374 7.30621C12.9463 7.26848 12.8486 7.24905 12.75 7.24905C12.6514 7.24905 12.5537 7.26848 12.4626 7.30621C12.3715 7.34395 12.2887 7.39927 12.219 7.469C12.1493 7.53873 12.094 7.62152 12.0562 7.71262C12.0185 7.80373 11.9991 7.90138 11.9991 8C11.9991 8.09862 12.0185 8.19627 12.0562 8.28738C12.094 8.37848 12.1493 8.46127 12.219 8.531L15.4395 11.75H6.75Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
