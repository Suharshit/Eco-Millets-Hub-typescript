import { Link } from "react-router-dom"
import { useState } from "react"
import authservice from "../../appwrite/auth"
import { FormEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext, AuthContextProps } from "../../_root/RootLayout";

const LoginForm = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext) as AuthContextProps;

  const { value, setValue } = context;
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userlogined = await authservice.loginUser({email, password});
    if(userlogined) {
      setValue(!value);
      navigate("/")
    }else{
      console.log("error.")
    }
  }

  return (
    <>
        <div className="flex flex-col font-nunito h-[350px] max-sm:w-[280px] max-xl:w-[350px]">
          <h2 className="text-center font-extrabold text-5xl text-[#092635]">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col pt-2 mt-3">
              <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="bg-[#9EC8B9] text-[#092635] placeholder-[#1B4242] rounded pl-[8px] pt-[10px] pb-[10px] text-lg" placeholder="Email"/>
            </div>
            <div className="flex flex-col pt-2 mt-3">
              <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="bg-[#9EC8B9] text-[#092635] placeholder-[#1B4242] rounded pl-[4px] pt-[10px] pb-[10px] text-lg" placeholder="password"/>
            </div>
            <button type="submit" className="h-[40px] w-[350px] pt-[10px] pb-10 bg-[#1B4242] mt-5 rounded text-[#9EC8B9] font-bold text-lg cursor-pointer max-xl:w-[350px] max-sm:w-[280px]">Submit</button>
          </form>
          <h2 className="mt-5 text-center text-text font-bold">Don't have an account? <Link to='/sign-in' className="text-[#092635] font-extrabold underline">Sign In</Link></h2>
        </div>
    </>
  )
}

export default LoginForm