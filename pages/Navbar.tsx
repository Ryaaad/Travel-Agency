import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
    return ( 
        <div className="flex justify-between py-4 font-semibold px-20 items-center 
          text-white ">
            <h1 className="text-2xl font-bold" >AroundMe</h1>
            <ul className="flex gap-9">
                <li>Our News</li>
                <li>Favorites</li>
                <li>Contact</li>
            </ul>
        <div className="flex justify-between gap-20 text-[#586570] ">
        <div className="rounded-full grid justify-center items-center
         w-10 h-10 bg-[#eee] " >  
        <BiSearch/>
        </div>
        <div className="rounded-full grid justify-center items-center
         w-10 h-10 bg-[#eee] ">
        <FiMenu/>
        </div>
        </div>

        </div>
     );
}
 
export default Navbar;