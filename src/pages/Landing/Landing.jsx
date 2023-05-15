export default function Landing() {
  return (
    <div className="flex" style={{height: '100vh', width: '1920px'}}>
      <div style={{width: '923px'}}>
        <div className="flex items-center align-center text-white h-full" style={{height: '84px', backgroundColor: '#7025FB'}}>
          <img src="/chess.svg" alt="Chess Icon" className="mr-2 ml-16"/>
          <span className="text-2xl">Redberry Knight Cup</span>
        </div>
        <img src="/public/landing.svg" alt="Left side"/>
      </div>
      <div className="text-white text-7xl px-[265px] py-[265px] pl-[85px] pr-[254px]" style={{width: '997px', backgroundColor: '#FD5334',height:'1163px'}}>
        <div className="flex items-center mb-10" style={{lineHeight:'109px'}}> 
          <p>CHESS SAYS</p>
          <p className="text-xl ml-8" style={{color:'#212529'}}>A LOT ABOUT</p>
        </div>
        
        <p className="mb-28">WHO WE ARE</p>
        
        <button className="bg-[#212529] rounded-lg text-center text-white text-xl px-4 py-2 flex items-center justify-center ">
          Get Started
          <img className="ml-3" src="/public/arrow.svg" alt="" />
        </button>


      </div>
    </div>
  );
}
