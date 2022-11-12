import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
    return ( 
        <div className="flex justify-between py-4 font-semibold px-20 items-center 
          text-white ">
            <h1  id='hovered' className="text-2xl font-bold cursor-pointer " >AroundMe</h1>
            <ul className="flex gap-9">
                <li  id='hovered'   className="cursor-pointer">Our News</li>
                <li  id='hovered'  className="cursor-pointer">Favorites</li>
                <li  id='hovered'  className="cursor-pointer">Contact</li>
            </ul>
        <div  id='hovered' className="flex justify-between gap-20 text-[#586570] ">
        <div className="rounded-full cursor-pointer grid justify-center items-center
         w-10 h-10 bg-[#eee] " >  
        <BiSearch/>
        </div>
        <div className="rounded-full  cursor-pointer grid justify-center items-center
         w-10 h-10 bg-[#eee] ">
        <FiMenu/>
        </div>
        </div>

        </div>
     );
}
 
export default Navbar;