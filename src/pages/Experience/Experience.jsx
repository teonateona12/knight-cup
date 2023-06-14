<<<<<<< HEAD
import React, { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { components } from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch,useSelector } from 'react-redux'; 
=======
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { components } from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

>>>>>>> main
import Header from "../../components/Header";
import experience from "../../assets/experience.svg";
import magnus from "../../assets/magnusCarlsen.png";
import check from "../../assets/check.png";
import wilhelm from "../../assets/wilhelm.png";
import bobby from "../../assets/bobby.png";
import bobby1 from "../../assets/bobby1.png";
import { updateData } from '../../store/userSlice';




const schema = yup.object().shape({
<<<<<<< HEAD
  levelOfKnowledge: yup.string().required('Level of Knowledge is required'),
  chooseYourCharacter: yup.string().required('Character is required'),
  participation: yup.string().required('This field is required'),
});




=======
  levelOfKnowledge: yup.object().required("Level of Knowledge is required"),
  chooseYourCharacter: yup.object().required("Character is required"),
  participation: yup.string().required("This field is required"),
});

>>>>>>> main
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#000000" : "#647196",
    backgroundColor: state.isSelected ? "rgba(58, 67, 116, 0.15)" : "#ffffff",
  }),

  control: () => ({
    backgroundColor: "transparent",
    display: "flex",
    color: "white",
    border: "none",
  }),
<<<<<<< HEAD
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: (styles) => ({ ...styles, color: 'rgba(58, 67, 116, 0.15)' }),
=======
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (styles) => ({ ...styles, color: "#FFFFFF" }),
>>>>>>> main
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;

    return {
      ...provided,
      opacity,
    };
  },
};

<<<<<<< HEAD
=======
const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <img
            src={arrow}
            alt="arrow"
            style={{ transform: "rotate(180deg)" }}
          />
        ) : (
          <img src={arrow} alt="arrow" style={{ transform: "rotate(0deg)" }} />
        )}
      </components.DropdownIndicator>
    )
  );
};
>>>>>>> main

export default function Experience() {
<<<<<<< HEAD
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 
 
  


  
  const OptionList = [
    { value: "magnus_carlsen", label: "Magnus Carlsen", image: magnus },
    { value: "wilhelm_steinitz", label: "Wilhelm Steinitz", image: wilhelm },
    { value: "bobby_fischer", label: "Bobby Fischer", image: bobby},
    { value: "bobby_fischer", label: "Bobby Fischer", image: bobby1},
    
  ];

  const CustomOption = ({ data, ...props }) => (
    <components.Option {...props}>
      <div className="flex items-center justify-between">
        <p>{data.label}</p>
        <img src={data.image} alt="" />
      </div>
    </components.Option>
  );
  
  const CustomSingleValue = ({ data, ...props }) => (
    <components.SingleValue {...props}>
      <div>{data.label}</div>
    </components.SingleValue>
  );



  const userData = useSelector((state)=>state.user)
  
  console.log(userData)
 

  const { handleSubmit, control,getValues,setValue, formState: { errors } } = useForm({
=======
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const CustomOption = ({ data, ...props }) => (
    <components.Option {...props}>
      <div className="flex justify-between items-center w-full px-2 py-1 hover:bg-slate-200 hover:font-semibold">
        <span className="flex items-center">{data.label}</span>
        <img src={data.image} alt={data.label} className="ml-2" />
      </div>
    </components.Option>
  );

  const OptionList = [
    { value: "magnus_carlsen", label: "Magnus Carlsen", image: magnus },
    { value: "wilhelm_steinitz", label: "Wilhelm Steinitz", image: wilhelm },
    { value: "bobby_fischer", label: "Bobby Fischer", image: bobby },
    { value: "another_player", label: "Another Player", image: bobby1 },
  ];

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
>>>>>>> main
    resolver: yupResolver(schema),
   
});





console.log(getValues("levelOfKnowledge"))

const onSubmit = async () => {

  navigate('/completed'); 
};

const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    hasMounted
      ? localStorage.setItem("user", JSON.stringify(userData))
      : setHasMounted(true);
  }, [userData, hasMounted]);


  function toTitleCase(str) {
    return str.replace(/_/g, " ").replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}




useEffect(() => {
  
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData) {
  
    setValue('participation', userData.already_participated ? "yes":"no");
    setValue('chooseYourCharacter', userData.character_id);
    setValue('levelOfKnowledge', userData.experience_level);
   
 
  }
}, [setValue]);


<<<<<<< HEAD
=======
  const onSubmit = async (data) => {
    navigate("/completed"); // Navigate to completed page after form submission
  };
>>>>>>> main

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

          <p className="text-3xl mb-[3px] leading-normal font-semibold">
            Chess experience
          </p>
          <p className="capitalize mb-[105px]">
            This is basic information fields
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="dropdown_container relative flex row gap-[23px] mb-[88px]">
              <Controller
                name="levelOfKnowledge"
                control={control}
<<<<<<< HEAD
                rules={{ required: 'Level of Knowledge is required' }}
                defaultValue={userData ? userData.experience_level:""}
                render={() => (
                  <div className="w-[24.5rem] ">
                    <Select
                    styles={customStyles}
                     
=======
                rules={{ required: "Level of Knowledge is required" }}
                render={({ field }) => (
                  <div className="w-[24.5rem] ">
                    <Select
                      styles={customStyles}
                      {...field}
>>>>>>> main
                      placeholder="Level of Knowledge *"
                      options={[
                        { value: "beginner", label: "Beginner" },
                        { value: "intermediate", label: "Intermediate" },
                        { value: "professional", label: "Professional" },
                      ]}
<<<<<<< HEAD
                    
                      onChange={(value) => {
                        setValue("levelOfKnowledge",value.value)
                      
                        dispatch(
                          updateData({
                            property: "experience_level",
                            value: value.value,
                          })
                        );
               
                      }}
                      
                      
                    
                      defaultValue={{value:userData.experience_level ? userData.experience_level:"",label:userData.experience_level ? userData.experience_level.charAt(0).toUpperCase()+userData.experience_level.slice(1):"level of knowledge"}}
                  
                      
                      className={`w-full h-12 text-black px-4 py-2 rounded flex justify-between items-center shadow-md border-b-2 ${errors.levelOfKnowledge ? 'border-red-500' : 'border-slate-300'}`}
=======
                      components={{ DropdownIndicator }}
                      onChange={(value) => field.onChange(value)}
                      onBlur={field.onBlur}
                      value={field.value}
                      className={`w-full h-12 text-black px-4 py-2 rounded flex justify-between items-center shadow-md border-b-2 ${
                        errors.levelOfKnowledge
                          ? "border-red-500"
                          : "border-slate-300"
                      }`}
>>>>>>> main
                    />
                    {errors.levelOfKnowledge && (
                      <p className="text-red-500">
                        {errors.levelOfKnowledge.message}
                      </p>
                    )}
                  </div>
                )}
              />

              <Controller
                name="chooseYourCharacter"
                control={control}
<<<<<<< HEAD
                rules={{ required: 'Character is required' }}
                render={() => (
                  <div className="w-[24.5rem]">
                    <Select
                      styles={customStyles}
                      className={`w-full h-12 text-black px-4 py-2 rounded flex justify-between items-center shadow-md border-b-2 ${errors.chooseYourCharacter ? 'border-red-500' : 'border-slate-300'}`}
=======
                rules={{ required: "Character is required" }}
                render={({ field }) => (
                  <div className="w-[24.5rem]">
                    <Select
                      styles={customStyles}
                      className={`w-full h-12 text-black px-4 py-2 rounded flex justify-between items-center shadow-md border-b-2 ${
                        errors.chooseYourCharacter
                          ? "border-red-500"
                          : "border-slate-300"
                      }`}
                      {...field}
>>>>>>> main
                      placeholder="Choose your character *"
                      options={OptionList}
                      components={{
                        Option: CustomOption,
<<<<<<< HEAD
                        SingleValue: CustomSingleValue,
                      }}
                      onChange={(value) => {
                        setValue("chooseYourCharacter",value.value)
                      
                        dispatch(
                          updateData({
                            property: "character_id",
                            value: value.value,
                          })
                        );
                      }}
                  
                      defaultValue={{value:userData.character_id ? userData.character_id:"",label: userData.character_id ? toTitleCase(userData.character_id) :"Choose your character *"}}
                    
                    />
                    {errors.chooseYourCharacter && <p className="text-red-500">{errors.chooseYourCharacter.message}</p>}
=======
                        DropdownIndicator,
                      }}
                      onChange={(value) => field.onChange(value)}
                      onBlur={field.onBlur}
                      value={field.value}
                    />

                    {errors.chooseYourCharacter && (
                      <p className="text-red-500">
                        {errors.chooseYourCharacter.message}
                      </p>
                    )}
>>>>>>> main
                  </div>
                )}
              />
            </div>

<<<<<<< HEAD




          </div>

          
          <span>Have you participated in the Redberry Championship?</span>
          <span className="text-red-500 ml-[4px]"> *</span>
 

=======
            <span>Have you participated in the Redberry Championship?</span>
            <span className="text-red-500 ml-[4px]"> *</span>
>>>>>>> main
            <Controller
              control={control}
              name="participation"
              defaultValue=""
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <div className="flex items-center mt-[20px]">
                  <div className="mr-4">
                    <input
                      {...field}
                      type="radio"
                      id="yesOption"
                      value="yes"
                      checked={field.value === 'yes'} 
                      defaultChecked={userData.already_participated==true}
                      onChange={(e) => {
                        field.onChange(e)
                        dispatch(
                          updateData({
                            property: "already_participated",
                            value: true,
                          })
                        );
                      
                      }}
                      className="form-radio text-blue-500 h-4 w-4"
                    />
                    <label htmlFor="yesOption" className="ml-2 text-sm">
                      Yes
                    </label>
                  </div>
                  <div>
                    <input
                      {...field}
                      type="radio"
                      id="noOption"
                      value="no"
                      checked={field.value === 'no'} 
                      onChange={(e) => {
                        field.onChange(e)
                        dispatch(
                          updateData({
                            property: "already_participated",
                            value: false,
                          })
                        );
                    
                      }}
                      className="form-radio text-blue-500 h-4 w-4"
                    />
                    <label htmlFor="noOption" className="ml-2 text-sm">
                      No
                    </label>
                  </div>
                </div>
              )}
            />
<<<<<<< HEAD

            {errors.participation && <p className="text-red-500">{errors.participation.message}</p>}


          

         
          

          
          <div className="w-[100%] mt-[174px] flex row justify-between">
            <Link
              to="/personal"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Back
            </Link>
            <button
            type="submit"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Done
          </button>
          </div>
      </form>
=======
            {errors.participation && (
              <p className="text-red-500">{errors.participation.message}</p>
            )}

            <div className="w-[100%] mt-[174px] flex row justify-between">
              <Link
                to="/personal"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Back
              </Link>
              <button
                type="submit"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Done
              </button>
            </div>
          </form>
>>>>>>> main
        </div>
      </div>
    </div>
  );
}