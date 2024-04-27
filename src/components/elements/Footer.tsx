import { Link } from "react-router-dom"
import GithubLogo from "../Icons/GithubLogo"
import InstaLogo from "../Icons/InstaLogo"
import LinkedinLogo from "../Icons/LinkedinLogo"

const Footer = () => {
  return (
    <>
        <div>
            <div className="flex space-x-5 text-xl font-semibold">
                <h1>Socials: </h1>
                <span className="flex space-x-2 ">
                    <InstaLogo/>
                    <GithubLogo/>
                    <LinkedinLogo/>
                </span>
            </div>
            <div className="pt-5">
                <div>
                    <ul className="space-y-3">
                        <li><Link to="/contactus">Contact US</Link></li>
                        <li><Link to="/refrences">Refrences</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/help">Help</Link></li>
                    </ul>
                </div>
            </div>
            <h2 className="flex w-full justify-center">Copyright©️2023-25. All Right Reserved</h2>
            <h2 className="flex w-full justify-center text-[#B6C4B6]"><a href="https://suharshitsingh-portfolio.vercel.app" target="_blank">Created by Suharshit Singh</a></h2>
        </div>
    </>
  )
}

export default Footer