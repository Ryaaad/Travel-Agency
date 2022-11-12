import Image from "next/image";
import tiger from "../../public/static/AfricaPic1.jpeg"
import { BsBookmarkFill } from "react-icons/bs";
interface props{
    view:boolean
}
const Cart:React.FC<props> = (props) => {
    return ( 
        <div className={`relative ${props.view ? " h-[370px] w-[270px]" : " h-[330px] w-[230px]"  }`} >
            <div 
            className={`text-[#ffffffdd]  font-semibold  absolute  left-0 
            ${props.view ? " top-[-14%]" : "text-sm top-[-15%] "  }`}>
                <h1>Amboseli National Park Kenya</h1>
               <div className="flex mt-2 gap-2">
               <div className={`rounded-full bg-[#ffffffdd] ${props.view ? " w-[10px] h-[10px]" :"w-[8px] h-[8px] "}
                `}></div>
                 <div className={`rounded-full bg-[#ffffffdd] ${props.view ? " w-[10px] h-[10px]" :"w-[8px] h-[8px] "}
                `}></div>
                <div className={`rounded-full bg-[#ffffffdd] ${props.view ? " w-[10px] h-[10px]" :"w-[8px] h-[8px] "}
                `}></div>
                <div className={`rounded-full 
                ${props.view ? "bg-[#ffffffdd] w-[10px] h-[10px]" :"bg-[#ffffff6a] w-[8px] h-[8px] "} `}></div>
              <div className={`rounded-full 
                ${props.view ? "bg-[#ffffffdd] w-[10px] h-[10px]" :"bg-[#ffffff6a] w-[8px] h-[8px] "} `}></div>
               </div>
            </div>
            <div className="rounded-full text-[#7c7e85] bg-[#ffffffdd] w-10 h-10 grid justify-center
             items-center  absolute top-[4%] right-[6%] text-sm " >
            <BsBookmarkFill/>
            </div>
<Image alt="" src={tiger}
className={` rounded-lg  ${props.view ? " h-[370px] w-[270px]" : " h-[330px] w-[230px]"  }`}></Image>
        </div>
     );
}
 
export default Cart;