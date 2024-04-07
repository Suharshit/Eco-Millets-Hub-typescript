import { Link } from "react-router-dom"
import NavbarToggle from "./NavbarToggle"



const NavBar = () => {
  return (
    <>
        <div className="pt-3 pr-5 pl-5 flex max-sm:pl-1 max-sm:pr-1">
          <div className="flex flex-1">
            <img src="../../../public/assets/homepage/spikelets-bunch-wheat-and-barley-rye-and-millet-spikes-2B9B3XD-removebg-preview.png" alt="bg" className="max-sm:h-[2.5rem] h-[3rem]"/>
            <h2 className="text-[#163020] font-bold text-xl pt-2">Eco Milets Hub</h2>
          </div>
          <div className="pr-2 pt-2 lg:hidden md:hidden max-sm:visible">
            <NavbarToggle/>
          </div>
          <div className="flex max-sm:hidden max-md:hidden">
            <ul className="flex gap-x-6 py-3 font-semibold text-[#163020]">
              <li><Link to='/' className="focus:text-[#FF9800] focus:underline">Home</Link></li>
              <li><Link to='/maps' className="focus:text-[#FF9800] focus:underline">Maps</Link></li>
              <li><Link to='/production' className="focus:text-[#FF9800] focus:underline">Production</Link></li>
              <li><Link to='/aboutus' className="focus:text-[#FF9800] focus:underline">About Us</Link></li>
              <li><Link to='/login' className="bg-[#092635] text-[#FFFFEC] py-2 px-5 rounded hover:bg-[#163020] ">Login</Link></li>
            </ul>
          </div> 
        </div>
    </>
  )
}

export default NavBar