import React, { useState } from "react";
import Header from "../../components/Header";
import experience from "../../assets/experience.svg";
import arrow from "../../assets/arrow.png";
import magnus from "../../assets/magnusCarlsen.png";
import check from "../../assets/check.png";
import wilhelm from "../../assets/wilhelm.png";
import bobby from "../../assets/bobby.png";
import bobby1 from "../../assets/bobby1.png";

export default function Experience() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex">
     <div className="w-[48%] relative">
        <Header />
        <img src={experience} alt="experience" />
        <p className="absolute top-[177px] left-[117px] font-bold text-2xl italic uppercase">
          “Many have become chess masters; <br />
          no one has become the master of chess.”
        </p>
        <p className="absolute top-[292px] left-[420px] uppercase font-semibold text-2xl italic text-blue-800">
        - Siegbert Tarrasch
        </p>
      </div>

      <div className="w-[52%] ">
        <div className="h-[84px] border-b border-gray-300 py-[30px] pl-[48px]">
          <p className="capitalize font-semibold">
            First step is done, continue to finish onboarding
          </p>
        </div>
        <div className="pt-[60px] pl-[48px] pr-[152px]">
          <div className="w-[262px] h-[40px] relative bg-transparent flex justify-between items-center ml-[59px]">
              <div className="w-[40px] h-[40px] bg-green-100  flex justify-center items-center rounded-lg">
                <img src={check} alt="" />
              </div>
              <hr className="h-0.5 w-[174px] absolute left-1/2 transform -translate-x-1/2 border-t border-gray-300" />
              <div className="w-[40px] h-[40px] bg-green-100 flex justify-center items-center rounded-lg">
                <p className="font-bold text-lg">2</p>
              </div>
          </div>
          <div className="flex row gap-[77px] mt-4 mb-[112px]">
            <p>Personal information</p>
            <p>Chess experience</p>
          </div>

          <p className="text-3xl mb-[3px] leading-normal font-semibold">Chess experience</p>
          <p className="capitalize mb-[105px]">This is basic information fields</p>
          <div className="dropdown_container relative flex row gap-[23px] mb-[88px]">
            <div>
              <button onClick={() => setIsOpen1(!isOpen1)} className="w-[24.5rem] h-12 text-black px-4 py-2 rounded flex justify-between items-center shadow-md border-b-2 border-slate-300">
                <div className="flex items-center">
                  <p>Level of knowledge </p>
                  <p className="text-red-500 ml-[4px] mt-[2px]">*</p>
                </div>
                <img
                  src={arrow}
                  alt="arrow"
                  className={`transform transition-transform duration-200 ${isOpen1 && 'rotate-180'}`}
                />
              </button>
              {isOpen1 && (
                <ul className="absolute left-0 mt-2 p-2 w-[24.5rem] bg-white border rounded shadow">
                  <li>
                    <a href="#" className=" block px-2 py-1 hover:bg-slate-200 hover:font-semibold">
                      Beginner
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" block px-2 py-1 hover:bg-slate-200 hover:font-semibold">
                      Intermediate
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" block px-2 py-1 hover:bg-slate-200 hover:font-semibold">
                      Professional
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <div>
              <button onClick={() => setIsOpen2(!isOpen2)} className="w-[24.5rem] h-12 text-black px-4 py-2 rounded flex justify-between items-center shadow-md border-b-2 border-slate-300">
                <div className="flex items-center">
                  <p>Choose your character</p>
                  <p className="text-red-500 ml-[4px] mt-[2px]">*</p>
                </div>
                <img
                  src={arrow}
                  alt="arrow"
                  className={`transform transition-transform duration-200 ${isOpen2 && 'rotate-180'}`}
                />
              </button>
              {isOpen2 && (
                <ul className="absolute left-50 mt-2 p-2 w-[24.5rem] bg-white border rounded shadow">
                <p className="px-2">Total(4)</p>
                <li className="flex items-center">
                  <a href="#" className="flex justify-between items-center w-full px-2 py-1 hover:bg-slate-200 hover:font-semibold">
                    <span className="flex items-center">Magnus Carlsen</span>
                    <img src={magnus} alt="" className="ml-2" />
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" className="flex justify-between items-center w-full px-2 py-1 hover:bg-slate-200 hover:font-semibold">
                    <span className="flex items-center">Magnus Carlsen</span>
                    <img src={wilhelm} alt="" className="ml-2" />
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" className="flex justify-between items-center w-full px-2 py-1 hover:bg-slate-200 hover:font-semibold">
                    <span className="flex items-center">Magnus Carlsen</span>
                    <img src={bobby} alt="" className="ml-2" />
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" className="flex justify-between items-center w-full px-2 py-1 hover:bg-slate-200 hover:font-semibold">
                    <span className="flex items-center">Magnus Carlsen</span>
                    <img src={bobby1} alt="" className="ml-2" />
                  </a>
                </li>
                
              </ul>
              
              )}
            </div>
          </div>
                <span >Have you participated in the Redberry Championship?</span>
                <span className="text-red-500 ml-[4px]"> *</span>
                <div className="flex items-center mt-[20px]">
                  <div className="mr-4">
                    <input
                      type="radio"
                      id="yesOption"
                      value="yes"
                      checked={selectedOption === "yes"}
                      onChange={handleOptionChange}
                      className="form-radio text-blue-500 h-4 w-4"
                    />
                    <label htmlFor="yesOption" className="ml-2 text-sm">
                      Yes
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="noOption"
                      value="no"
                      checked={selectedOption === "no"}
                      onChange={handleOptionChange}
                      className="form-radio text-blue-500 h-4 w-4"
                    />
                    <label htmlFor="noOption" className="ml-2 text-sm">
                      No
                    </label>
                  </div>
                </div>
                  <div className="w-[100%] mt-[174px] flex row justify-between">
                  <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Back</button>
                      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Done</button>
                  </div>
        </div>
      </div>
    </div>
  );
}
