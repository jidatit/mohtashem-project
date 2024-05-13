import { Link } from "react-router-dom"
import social1 from "../assets/images/header/0BCBBEA2-0A86-437E-A7FC-36D3BE1F23C4.png"
import twittericon from "../assets/images/header/twitter.png"
import telegramicon from "../assets/images/header/telegram.png"
import homeicon from "../assets/images/header/house-black-silhouette-without-door.png"

function Header() {

  return (
    <div className=" z-[999] w-full bg-white px-4 pt-3 pb-2 border-black border-t-[3px] border-x-[3px] border-b-[6px] rounded-[10px] font-secondary flex items-center justify-between">
      <div className=" md:flex hidden gap-3 ">
        <Link to="/#about" className=" hover:text-dark">About</Link>
        <Link to="/#story" className=" hover:text-dark">Story</Link>
        <Link to="/#contributors" className=" hover:text-dark">Contibutors</Link>
        <Link to="/#last" className=" hover:text-dark">Slerfnomics</Link>
        <Link to="/raids" className=" hover:text-dark">Raids</Link>
      </div>
      <div className=" md:hidden flex gap-2">
        <Link to="/#about" className=" font-primary border-black border-t-[3px] border-x-[3px] border-b-[6px] rounded-[10px] px-[10px] flex items-center justify-center cursor-pointer">
          <img className=" w-4" src={homeicon} />
        </Link>
        <Link to="/raids" className=" font-primary border-black border-t-[3px] border-x-[3px] border-b-[6px] rounded-[10px] px-[15px] cursor-pointer">
          RAIDS
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center gap-1">
        <Link to="https://t.me/Siamesecatmeme" className=" border-black border-t-[2px] border-r-[3px] border-b-[3px] border-l-[2px] hover:border-t-[3px] hover:border-r-[2px] hover:border-b-[2px] hover:border-l-[3px] rounded-[6px] cursor-pointer">
          <img src={telegramicon} className=" w-7 p-1 rounded-[6px]" />
        </Link>
        <Link to="https://x.com/siamesmeme" className=" border-black border-t-[2px] border-r-[3px] border-b-[3px] border-l-[2px] hover:border-t-[3px] hover:border-r-[2px] hover:border-b-[2px] hover:border-l-[3px] rounded-[6px] cursor-pointer">
          <img src={twittericon} className=" w-7 p-1 rounded-[6px]" />
        </Link>
        <div className=" border-black border-t-[2px] border-r-[3px] border-b-[3px] border-l-[2px] hover:border-t-[3px] hover:border-r-[2px] hover:border-b-[2px] hover:border-l-[3px] rounded-[6px] cursor-pointer">
          <img src={social1} className=" w-7 rounded-[6px]" />
        </div>
      </div>
    </div>
  )
}

export default Header