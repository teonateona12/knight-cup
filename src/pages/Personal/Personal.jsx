import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useForm, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import loginSchema from "../../loginSchema";
import ChessFigures from "../../assets/chess-figures.jpg";
import Check from "../../assets/check.svg";
import Error from "../../assets/error.svg";
import Cancel from "../../assets/cancel.svg";
import DoubleCheck from "../../assets/check.png";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../store/userSlice";

export default function Personal() {
  const [cancelName, SetCancelName] = useState(false);
  const [cancelMail, setCancelMail] = useState(false);
  const [cancelTel, setcancelTel] = useState(false);
  const [cancelDate, setCancelDate] = useState(false);

  const [click, setClick] = useState(false);

  const [hasMounted, setHasMounted] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleDateChange = (e) => {
    const { value } = e.target;

    // Remove any non-digit characters from the input value
    const sanitizedValue = value.replace(/\D/g, "");

    // Format the date with slashes
    let formattedDate = "";
    if (sanitizedValue.length >= 3) {
      formattedDate += `${sanitizedValue.slice(0, 2)}/`;
      formattedDate += `${sanitizedValue.slice(2, 4)}/`;
      formattedDate += `${sanitizedValue.slice(4, 8)}`;
    } else if (sanitizedValue.length >= 2) {
      formattedDate += `${sanitizedValue.slice(0, 2)}/`;
      formattedDate += `${sanitizedValue.slice(2)}`;
    } else if (sanitizedValue.length > 0) {
      formattedDate += sanitizedValue;
    }

    e.target.value = formattedDate;
    console.log(34);
  };

  const onSubmit = async (data) => {
    navigate("/experience");
  };

  const clickNextBtn = () => setClick(true);

  useEffect(() => {
    hasMounted
      ? localStorage.setItem("user", JSON.stringify(userData))
      : setHasMounted(true);
  }, [userData, hasMounted]);

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
        <div className="relative">
          <div className="flex items-center pl-[107px] mt-[60px] ">
            {!errors.name &&
            dirtyFields.name &&
            !errors.email &&
            dirtyFields.email &&
            !errors.tel &&
            dirtyFields.tel &&
            !errors.date &&
            dirtyFields.date ? (
              <div className="flex items-center justify-center w-[40px] h-[40px] border border-[#E5E6E8] rounded-lg bg-[#E9FAF1]">
                <img src={DoubleCheck} />
              </div>
            ) : (
              <p className="flex items-center justify-center w-[40px] h-[40px] border border-[#E5E6E8] rounded-lg font-open-sans font-bold text-base/[25px]">
                1
              </p>
            )}
            <div className="w-[174px] h-px bg-[#B9B4C34D]/[0.3]"></div>
            <p className="flex items-center justify-center w-[40px] h-[40px] border border-[#E5E6E8] rounded-lg font-open-sans font-bold text-base/[25px] bg-[#F5F5F5]">
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

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-11 flex-col pl-12 pr-[174px]"
          >
            <div
              className={`flex items-center py-2 pl-4 shadow-[inset_0_-1px_0_rgba(0,0,0,0.125)] rounded ${
                errors.name &&
                "bg-light-red shadow-[inset_0_-1px_0_rgba(0, 0, 0, 0.125)]"
              }`}
            >
              <input
                type="text"
                id="name"
                placeholder="Name *"
                defaultValue={userData.name}
                className={`w-[100%] outline-none hover:[#fff] ${
                  errors.name ? "text-[#DC3545] bg-light-red" : "text-black"
                }`}
                {...register("name", {
                  onChange: (e) => {
                    dispatch(
                      updateData({ property: "name", value: e.target.value })
                    );
                  },
                })}
              />
              {errors.name && dirtyFields.name && !cancelName && (
                <div className="absolute top-0 right-9 border border-solid border-[#000]/[0.1] shadow-md rounded bg-white/[0.85] ">
                  <div className="flex items-center gap-2 border-b border-solid border-[#000]/[0.1] py-[9.5px] px-3">
                    <img src={Error} alt="" />
                    <p className="text-[#DC3545]">Invalid name</p>
                    <img
                      src={Cancel}
                      alt=""
                      className="ml-auto"
                      onClick={() => SetCancelName(true)}
                    />
                  </div>
                  <p className="p-3 ">{errors.name.message}</p>
                </div>
              )}

              {!errors.name && click && (
                <img src={Check} alt="" className=" mx-5" />
              )}
            </div>

            <div
              className={`flex items-center py-2 pl-4 shadow-[inset_0_-1px_0_rgba(0,0,0,0.125)] rounded ${
                errors.email &&
                "bg-light-red shadow-[inset_0_-1px_0_rgba(0, 0, 0, 0.125)]"
              }`}
            >
              <input
                type="text"
                placeholder="Email address *"
                defaultValue={userData.email}
                className={`w-[100%] outline-none ${
                  errors.email ? "text-[#DC3545] bg-light-red" : "text-black"
                }`}
                {...register("email", {
                  onChange: (e) => {
                    dispatch(
                      updateData({ property: "email", value: e.target.value })
                    );
                  },
                })}
              />

              {errors.email && dirtyFields.email && !cancelMail && (
                <div
                  className={`absolute top-20 right-9 border border-solid border-[#000]/[0.1] shadow-md rounded bg-white/[0.85] `}
                >
                  <div className="flex items-center gap-2 border-b border-solid border-[#000]/[0.1] py-[9.5px] px-3">
                    <img src={Error} alt="" />
                    <p className="text-[#DC3545]">Invalid email</p>
                    <img
                      src={Cancel}
                      alt=""
                      className="ml-auto"
                      onClick={() => setCancelMail(true)}
                    />
                  </div>
                  <p className="p-3 ">{errors.email.message}</p>
                </div>
              )}

              {!errors.email && click && (
                <img src={Check} alt="" className="mx-5" />
              )}
            </div>

            <div
              className={`flex items-center py-2 pl-4 shadow-[inset_0_-1px_0_rgba(0,0,0,0.125)] rounded ${
                errors.tel && "bg-light-red"
              }`}
            >
              <input
                type="tel"
                placeholder="Phone number *"
                defaultValue={userData.phone}
                className={`w-[100%] outline-none ${
                  errors.tel ? "text-[#DC3545] bg-light-red" : "text-black"
                }`}
                {...register("tel", {
                  onChange: (e) => {
                    dispatch(
                      updateData({ property: "phone", value: e.target.value })
                    );
                  },
                })}
              />

              {errors.tel && dirtyFields.tel && !cancelTel && (
                <div className="absolute top-40 right-9 border border-solid border-[#000]/[0.1] shadow-md rounded bg-white/[0.85] ">
                  <div className="flex items-center gap-2 border-b border-solid border-[#000]/[0.1] py-[9.5px] px-3">
                    <img src={Error} alt="" />
                    <p className="text-[#DC3545]">Invalid phone number</p>
                    <img
                      src={Cancel}
                      alt=""
                      className="ml-auto"
                      onClick={() => setcancelTel(true)}
                    />
                  </div>
                  <p className="p-3 ">{errors.tel.message}</p>
                </div>
              )}
              {!errors.tel && click && (
                <img src={Check} alt="" className="mx-5" />
              )}
            </div>

            <div
              className={`flex items-center py-2 pl-4 shadow-[inset_0_-1px_0_rgba(0,0,0,0.125)] rounded ${
                errors.date && "bg-light-red"
              }`}
            >
              <input
                placeholder="Date of birth *"
                value={userData.date_of_birth}
                className={`w-[100%] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:_textfield] ${
                  errors.date ? "text-[#DC3545] bg-light-red" : "text-black"
                }`}
                
                {...register("date", {
                  onChange: (e) => {
                    handleDateChange(e);
                    
                    dispatch(
                      updateData({
                        property: "date_of_birth",
                        value: e.target.value,
                      })
                    );
                  },
                })}
              />

              {errors.date && dirtyFields.date && !cancelDate && (
                <div className="absolute top-60 right-9 border border-solid border-[#000]/[0.1] shadow-md rounded bg-white/[0.85] ">
                  <div className="flex items-center gap-2 border-b border-solid border-[#000]/[0.1] py-[9.5px] px-3">
                    <img src={Error} alt="" />
                    <p className="text-[#DC3545]">Invalid date</p>
                    <img
                      src={Cancel}
                      alt=""
                      className="ml-auto"
                      onClick={() => setCancelDate(true)}
                    />
                  </div>
                  <p className="p-3 ">{errors.date.message}</p>
                </div>
              )}
              {!errors.date && click && (
                <img src={Check} alt="" className=" mx-5" />
              )}
            </div>
            <div className="flex items-center justify-between font-open-sans font-normal text-xl/[27px]">
              <Link
                to={"/"}
                className="py-[12px] px-[24px] text-black border border-black rounded-lg h-[53px]"
              >
                Back
              </Link>

              <button
                onClick={() => {
                  clickNextBtn();
                  SetCancelName(false);
                  setCancelMail(false);
                  setcancelTel(false);
                  setCancelDate(false);
                }}
                className="flex gap-3 bg-black text-[#fff] px-6 py-[13px] rounded-lg"
              >
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
