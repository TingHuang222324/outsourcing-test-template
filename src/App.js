import bg from './assets/images/background.png'
import notice1 from './assets/images/notice-1.png'
function App() {
  return (
    <div className='min-h-screen'>
      <div className="flex flex-col min-h-screen" style={{ backgroundImage: `url('${bg}')` }}>
        <div className='flex flex-col items-center justify-center '>

          <div className='bg-[#22251D] rotate-[-5deg] text-white  py-4 px-5 text-center mt-28 w-[60%] md:w-[30%] mb-14'>
            <div className='rotate-[5deg] font-zenKurenaido text-4xl '>
              白金瑪麗
            </div>
          </div>
          <div className='text-3xl text-enter md:text-4xl font-roboto mb-14'>已蒐集到的店家清單</div>
          <div className='mb-5 text-2xl text-center md:text-4xl font-roboto'>10/12  Bar Mood</div>
          <div className='text-2xl text-center md:text-4xl font-roboto'>11/29 To Infinity and Beyond</div>
        </div>
        <div className='flex flex-col items-end justify-end flex-1 py-16 text-center md:mt-0'>
          <button className="flex relative flex-col items-center justify-center shadow-[5px_5px_0px_0px_#000000]   max-w-full transform rotate-[-5deg] bg-white h-[71px] w-[80%]  mx-auto ">
            <div className="box-border relative self-center h-auto text-3xl font-roboto shrink-0 ">
              點這集點
            </div>
          </button>
          <div className='flex justify-center mx-auto mt-5'>
            <div className='bg-[#2A2B23] font-roboto text-white  text-base md:text-3xl rotate-[10deg] w-28 md:w-60  flex items-center justify-center shadow-[5px_5px_0px_0px_#fff] '>LINE POINTS <br />兌換</div>
            <div className='text-[#2A2B23] font-roboto bg-white  text-base  md:text-3xl   flex items-center justify-center shadow-[5px_5px_0px_0px_#000000] w-24 md:w-56'>活動店家</div>
            <div className='bg-[#2A2B23] font-roboto text-white  text-base  md:text-3xl rotate-[-10deg] flex items-center justify-center shadow-[5px_5px_0px_0px_#fff] w-28 md:w-56'>已集點店家</div>
          </div>
        </div>
    


      </div>


      <footer className="" >
        <img className='w-full h-full' srcSet={notice1} alt='酒後不開車'/>

      </footer>
    </div>
  );
}

export default App;
