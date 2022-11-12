import Cart from './Cart'
import { AiOutlineDash } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight,MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Landing = () => {
    return ( 
        <div className="flex gap-[150px] overflow-hidden relative h-[83vh] items-center  ">

            <div className='absolute left-[5%] mt-14 h-[75vh] w-[1px]
             bg-[#eeeeee3c] z-[0] ' >
            <div className=' absolute top-[15%] translate-x-[-50%] left-[50%] rounded-full w-[7px] h-[7px] bg-[#eeeeee50] ' ></div>
            <div className=' absolute top-[30%] rounded-full  translate-x-[-50%] left-[50%] w-[7px] h-[7px] bg-[#eeeeee50] ' ></div>
           
            <div className=' absolute z-10 top-[45%] rounded-full   translate-x-[-50%] left-[50%] w-[40px] h-[40px]
             bg-[#eeeeee50] text-white text-sm flex justify-center items-center ' >
                3
            </div>
           
            <div className=' absolute top-[60%] rounded-full  translate-x-[-50%] left-[50%] w-[7px] h-[7px] bg-[#eeeeee50] ' ></div>
            <div className=' absolute top-[75%] rounded-full  translate-x-[-50%] left-[50%] w-[7px] h-[7px] bg-[#eeeeee50] ' ></div>
            </div>

             <div className=' ml-40 text-white' >
            <h1 className="text-7xl tracking-wide font-semibold leading-[90px] " >Africa</h1>
            <p className=' my-5 text-sm w-[26vw] leading-6 text-[#ffffffdd] '>Africa nowhere like it on 
            the planet for wildlife wild    lands and rish traditions that endure,prepare to fall in love</p>
            <button className='h-[52px] font-semibold px-4 w-[150px] justify-between rounded-[5px]
             bg-[#603234] flex items-center text-sm '>Explore
            <BsArrowRight className=' text-xl text-[#a5807e]'></BsArrowRight></button>

            <h1 className="absolute  top-[4%] text-[#ffffff20] text-6xl tracking-wide font-semibold
             leading-[90px] " >America</h1>
              <h1 className="absolute bottom-[1%] text-[#ffffff20] text-6xl tracking-wide font-semibold 
              leading-[90px]">Asia</h1>


            </div>
           
            <div className='flex items-center gap-10' >
            <Cart view={true}></Cart> 
            <Cart view={false}></Cart> 
            <Cart view={false}></Cart>
            </div>
            <div className="absolute bottom-[0%] left-[49%] flex gap-[400px] items-center ">
                <div className="flex gap-3 text-white text-xl">
                <div className='rounded-full cursor-pointer bg-[#c1c1c16c] grid justify-center items-center
                 w-12 h-12'>
                        <MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft></div>
                    <div className='rounded-full cursor-pointer bg-[#c1c1c16c] grid justify-center items-center
                     w-12 h-12' >
            <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></div>
                    
                </div>
                <div className='flex mt-10 text-white items-center gap-3 font-bold text-xl' >
                    01 <div className="inline w-[40px] h-[2px] bg-[#d8d7d768] "></div> 
                    <span className='text-[#d8d7d768]' > 08</span>
                </div>
            </div>
        </div>
     );
}
 
export default Landing;