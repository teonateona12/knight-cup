import landing from "../../assets/landing.svg";
import arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
export default function Landing() {
  return (
    <div className="flex">
      <div className="w-[48%]">
        <Header />
        <img src={landing} alt="landing img" />
      </div>
      <div className="text-white text-7xl w-[52%] bg-[#FD5334]  px-[265px] py-[265px] pl-[85px] pr-[254px]">
        <div className="flex items-center mb-10 leading-[109px]">
          <p className="uppercase">chess says</p>
          <p className="text-xl ml-8 text-[#212529] uppercase">a lot about</p>
        </div>

        <p className="mb-28 uppercase">who we are</p>

        <Link
          to={"/personal"}
          className="bg-[#212529] rounded-lg text-center text-white text-xl px-4 py-2 flex items-center justify-center "
        >
          Get Started
          <img className="ml-3" src={arrow} alt="arrow img" />
        </Link>
      </div>
    </div>
  );
}
