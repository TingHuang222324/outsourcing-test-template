import bg from './assets/images/background.png'
import notice1 from './assets/images/notice-1.png'
function App() {
  return (
    <div className='min-h-screen'>
      <div className="min-h-screen flex flex-col" style={{ backgroundImage: `url('${bg}')` }}>
        <div className='flex flex-col justify-center items-center '>

          <div className='bg-[#22251D] rotate-[-5deg] text-white  py-4 px-5 text-center mt-28 w-[60%] lg:w-[20%] mb-14'>
            <div className='rotate-[5deg] font-zenKurenaido text-4xl '>
              白金瑪麗
            </div>
          </div>
          <div className='font-roboto text-[40px] text-center mb-14'>已蒐集到的店家清單</div>
          <div className='font-roboto text-4xl text-center mb-5'>10/12  Bar Mood</div>
          <div className='font-roboto text-4xl text-center'>11/29 To Infinity and Beyond</div>
        </div>
        <div className='flex-1 flex flex-col items-end justify-center mt-56 lg:mt-40 pb-16 text-center'>
          <button className="flex relative flex-col items-center justify-center shadow-[5px_5px_0px_0px_#000000]   max-w-full transform rotate-[-5deg] bg-white h-[71px] w-[80%] lg:w-[50%]  mx-auto ">
            <div className="box-border font-roboto relative shrink-0 self-center h-auto text-3xl ">
              點這集點
            </div>
          </button>
          <div className='flex justify-center  mt-5 mx-auto'>
            <div className='bg-[#2A2B23] font-roboto text-white text-xl  lg:text-3xl rotate-[10deg] px-2  flex items-center shadow-[5px_5px_0px_0px_#fff]'>LINE POINTS <br />兌換</div>
            <div className='text-[#2A2B23] font-roboto bg-white  text-xl  lg:text-3xl  px-2 flex items-center shadow-[5px_5px_0px_0px_#000000]'>活動店家</div>
            <div className='bg-[#2A2B23] font-roboto text-white  text-xl  lg:text-3xl rotate-[-10deg] px-2 flex items-center shadow-[5px_5px_0px_0px_#fff]'>已集點店家</div>
          </div>
        </div>
    


      </div>


      <footer className="" >
        <img className='h-full w-full' srcSet={notice1} alt='酒後不開車'/>

      </footer>
    </div>
  );
}

export default App;
