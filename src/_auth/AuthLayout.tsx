import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
      <div className="flex h-screen w-screen justify-start items-center">
        <div className="flex">
          <img src="/public/assets/form-bg-2.jpg" alt="bg" className="h-screen w-[650px] max-sm:hidden max-lg:hidden"/>
          <h2 className="text-[#9EC8B9] fixed text-5xl font-extrabold pt-[250px] pl-[110px] max-lg:hidden">Eco Millets Hub</h2>
          <h3 className="text-[#9EC8B9] fixed text-xl font-bold pt-[300px] pl-[110px] max-lg:hidden">Go Gluten-Free, Go Millet</h3>
        </div>
        <div className="max-sm:pl-[110px] max-md:pl-[220px] max-lg:pl-[270px] pl-[260px]">
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default AuthLayout