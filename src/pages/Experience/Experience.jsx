import React, { useState } from "react";
import { Link,json,useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { components } from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch,useSelector } from 'react-redux'; 


import Header from "../../components/Header";
import experience from "../../assets/experience.svg";
import arrow from "../../assets/arrow.png";
import magnus from "../../assets/magnusCarlsen.png";
import check from "../../assets/check.png";
import wilhelm from "../../assets/wilhelm.png";
import bobby from "../../assets/bobby.png";
import bobby1 from "../../assets/bobby1.png";
import { updateData } from '../../store/userSlice';
import { data } from "autoprefixer";



const schema = yup.object().shape({
  levelOfKnowledge: yup.object().required('Level of Knowledge is required'),
  chooseYourCharacter: yup.object().required('Character is required'),
  participation: yup.string().required('This field is required'),
});


const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#000000' : '#647196',
    backgroundColor: state.isSelected ? 'rgba(58, 67, 116, 0.15)' : '#ffffff',
  }),
  
  control: () => ({
    backgroundColor: 'transparent',
    display: 'flex',
    color: 'white',
    border: 'none',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: (styles) => ({ ...styles, color: '#FFFFFF' }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
  


    return {
      ...provided,
      opacity,
    
    };
  },
};

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <img src={arrow} alt="arrow" style={{ transform: "rotate(180deg)" }} />
        ) : (
          <img src={arrow} alt="arrow" style={{ transform: "rotate(0deg)" }} />
        )}
      </components.DropdownIndicator>
    )
  );
};


export default function Experience() {
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 
 
  

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const CustomOption = ({ data, ...props }) => (
    <components.Option {...props}>
    <div className="flex justify-between items-center w-full px-2 py-1 hover:bg-slate-200 hover:font-semibold">
      <span  className="flex items-center">{data.label}</span>
      <img src={data.image} alt={data.label} className="ml-2" />
    </div>
  </components.Option>
);
  
  const OptionList = [
    { value: "magnus_carlsen", label: "Magnus Carlsen", image: magnus },
    { value: "wilhelm_steinitz", label: "Wilhelm Steinitz", image: wilhelm },
    { value: "bobby_fischer", label: "Bobby Fischer", image: bobby},
    { value: "another_player", label: "Another Player", image: bobby1 },
  ];


  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      levelOfKnowledge: JSON.parse(localStorage.getItem('levelOfKnowledge')),
      chooseYourCharacter: JSON.parse(localStorage.getItem('chooseYourCharacter')),
      participation: localStorage.getItem('participation')
    }
});


const userData = useSelector((state)=>state.user)




const onSubmit = async (data) => {
  dispatch(updateData({property:"already_participated",value:data.participation}));
  
  
  localStorage.setItem('participation', data.participation); // Save participation to local storage

  navigate('/completed'); // Navigate to completed page after form submission
};

React.useEffect(() => {
  // const levelOfKnowledge = JSON.parse(localStorage.getItem('levelOfKnowledge'));
  // const chooseYourCharacter = JSON.parse(localStorage.getItem('chooseYourCharacter'));
  // const participation = localStorage.getItem('participation');

  localStorage.setItem('user',JSON.stringify(userData))
  
  // reset({ levelOfKnowledge, chooseYourCharacter, participation });
}, [userData]);
  

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

    <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="dropdown_container relative flex row gap-[23px] mb-[88px]">

          
              <Controller 
              
                name="levelOfKnowledge"
                control={control}
                rules={{ required: 'Level of Knowledge is required' }}
                render={({ field }) => (
                  <div className="w-[24.5rem] ">
                    <Select
                    styles={customStyles}
                      {...field}
                      placeholder="Level of Knowledge *"
                      options={[
                        { value: "beginner", label: "Beginner" },
                        { value: "intermediate", label: "Intermediate" },
                        { value: "professional", label: "Professional" },
                      ]}
                      components={{ DropdownIndicator }}
                      onChange={(value) => {
                        field.onChange(value);
                        dispatch(
                          updateData({
                            property: "experience_level",
                            value: value.value,
                          })
                        );
                        // localStorage.setItem('levelOfKnowledge', JSON.stringify(value)); // Save levelOfKnowledge to local storage
                      }}
                      
                      
                      onBlur={field.onBlur}
                      value={field.value}
                      className={`w-full h-12 text-black px-4 py-2 rounded flex justify-between items-center shadow-md border-b-2 ${errors.levelOfKnowledge ? 'border-red-500' : 'border-slate-300'}`}
                    />
                    {errors.levelOfKnowledge && <p className="text-red-500">{errors.levelOfKnowledge.message}</p>}
                  </div>
                )}
              />
              




              <Controller
                name="chooseYourCharacter"
                control={control}
                rules={{ required: 'Character is required' }}
                render={({ field }) => (
                  <div className="w-[24.5rem]">
                  
                    <Select
                      styles={customStyles}
                      className={`w-full h-12 text-black px-4 py-2 rounded flex justify-between items-center shadow-md border-b-2 ${errors.chooseYourCharacter ? 'border-red-500' : 'border-slate-300'}`}
                      {...field}
                      placeholder="Choose your character *"
                      options={OptionList}
                      components={{
                        Option: CustomOption,DropdownIndicator
                      }}
                      
                      onChange={(value) => {
                        field.onChange(value);
                        dispatch(
                          updateData({
                            property: "character_id",
                            value: value.value,
                          })
                        );
                        // localStorage.setItem('chooseYourCharacter', JSON.stringify(value)); // Save levelOfKnowledge to local storage
                      }}
                      onBlur={field.onBlur}
                      value={field.value}
                      
                    />
                    
                    {errors.chooseYourCharacter && <p className="text-red-500">{errors.chooseYourCharacter.message}</p>}
                  </div>
                )}
              />





          </div>

          
          <span>Have you participated in the Redberry Championship?</span>
          <span className="text-red-500 ml-[4px]"> *</span>
          <Controller
              control={control}
              name="participation"
              defaultValue=""
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <div className="flex items-center mt-[20px]">
                  <div className="mr-4">
                    <input
                      {...field}
                      type="radio"
                      id="yesOption"
                      value="yes"
                      checked={field.value === 'yes'} 
                      onChange={(e) => {
                        field.onChange(e)
                        dispatch(
                          updateData({
                            property: "already_participated",
                            value: true,
                          })
                        );
                        // localStorage.setItem('participation', 'yes') // save to localStorage immediately
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
                        // localStorage.setItem('participation', 'no') // save to localStorage immediately
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
        </div>
      </div>
    </div>
  );
}