import NavbarToggle from "./NavbarToggle"



const NavBar = () => {
  return (
    <>
        <div className="pt-3 pr-5 pl-5 flex max-sm:pl-1 max-sm:pr-1">
          <div className="flex flex-1">
            <img src="../../../public/assets/homepage/spikelets-bunch-wheat-and-barley-rye-and-millet-spikes-2B9B3XD-removebg-preview.png" alt="bg" className="max-sm:h-[2.5rem]"/>
            <h2 className="text-heading font-bold text-xl pt-2">Eco Milets Hub</h2>
          </div>
          <div className="pr-2 pt-2">
            <NavbarToggle/>
          </div>
        </div>
    </>
  )
}

export default NavBar