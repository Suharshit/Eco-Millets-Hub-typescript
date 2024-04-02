import { Link } from "react-router-dom"
import { useState } from "react"
import authservice from "../../appwrite/auth"
import { FormEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext, AuthContextProps } from "../../_root/RootLayout";


const SigninForm = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext) as AuthContextProps;

  const { value, setValue } = context;
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const usersignup = await authservice.createAccount({email, password, name});

    if(usersignup) {
      setValue(!value);
      navigate("/")
    }else{
      console.log("error.")
    }
  }

  return (
    <>
        <div className="flex flex-col font-nunito h-[350px] max-sm:w-[280px] max-xl:w-[350px]">
          <h2 className="text-center font-extrabold text-3xl text-[#092635]">Register</h2>
          <h3 className="text-center text-[#1B4242] font-semibold">Create your new account</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col pt-3 mt-3">
              <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="bg-[#9EC8B9] text-[#092635] placeholder-[#1B4242] rounded pl-[6px] pt-[10px] pb-[10px]" placeholder="Name"/>
            </div>
            <div className="flex flex-col pt-2 mt-3">
              <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="bg-[#9EC8B9] placeholder-[#1B4242] text-[#092635] rounded pl-[6px] pt-[10px] pb-[10px]" placeholder="Email"/>
            </div>
            <div className="flex flex-col pt-2 mt-3">
              <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="bg-[#9EC8B9] text-[#092635] rounded  placeholder-[#1B4242] pl-[6px] pt-[10px] pb-[10px]"  placeholder="Password"/>
            </div>
            <button type="submit" className="h-[40px] w-[350px] pt-[10px] pb-10 bg-[#092635] mt-5 rounded text-[#9EC8B9] font-bold text-lg cursor-pointer max-xl:w-[350px] max-sm:w-[280px]">Submit</button>
          </form>
          <h2 className="mt-5 text-center text-text">Already have an account? <Link to='/login' className="text-heading font-extrabold underline">Login</Link></h2>
        </div>
    </>
  )
}

export default SigninForm