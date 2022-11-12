import Image from "next/image";
import tiger from "../../public/static/AfricaPic1.jpeg"
import { BsBookmarkFill } from "react-icons/bs";
interface props{
    view:boolean,
    title:string,
    img:string,
    Rating:number,
    Fav:boolean
}
const Cart:React.FC<props> = (props) => {
    return ( 
        <div className={`relative ${props.view ? " h-[400px] w-[300px]" : " h-[340px] w-[270px]"  }`} >
            <div 
            className={`text-[#ffffffdd]  font-semibold  absolute  left-0 
            ${props.view ? " top-[-14%]" : "text-sm top-[-15%] "  }`}>
                <h1>{props.title}</h1>
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
            <div  id='hovered' className="rounded-full cursor-pointer text-[#7c7e85] bg-[#ffffffdd] w-10 h-10 grid
             justify-center items-center absolute top-[4%] right-[6%] text-sm " >
            <BsBookmarkFill/>
            </div>
<img alt="" src={props.img} 
className={` rounded-lg  ${props.view ? " h-[400px] w-[300px]" : " h-[340px] w-[270px]"  }`}/>
        </div>
     );
}
 
export default Cart;