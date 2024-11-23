import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import like from "@assets/icons/like.svg";
import cart from "@assets/icons/cart.svg";
import profile from "@assets/icons/profile.svg";
import search from "@assets/icons/search.svg";

const Header = () => {
  return (
    <header>
      <div className="bg-mainColor font-cormorantSC">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <nav>
              <ul className="flex gap-9 text-[1.25rem]">
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Каталог</a>
                </li>
                <li>
                  <a href="#">Блог</a>
                </li>
              </ul>
            </nav>
            <h1 className="text-[1.6875rem] font-regular pl-36">BB Jewerly</h1>
            <div className="flex gap-5 items-center">
              <div className="flex border-[0.0625rem] border-black text-black rounded-lg py-[0.3125rem] bg-transparent  items-center justify-center w-fit ">
                <input
                  type="text"
                  placeholder="Поиск"
                  className="bg-transparent placeholder:font-sans outline-none px-2 w-[10rem] font-karla placeholder-[#727272]"
                />
                <img src={search} alt="" className="mr-2" />
              </div>
              <div className="flex gap-9 items-center">
                <a href="">
                  <img src={like} alt="" className="ml-4" />
                </a>
                <a href="">
                  <img src={cart} alt="" />
                </a>
                <a href="">
                  <img src={profile} alt="" className="pb-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
