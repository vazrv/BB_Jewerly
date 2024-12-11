// libs
import React from "react";
import { Link } from "react-router-dom";

// Icons
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
          <div className="flex items-center justify-between">
            <nav>
              <ul className="flex gap-9 text-[1.25rem]">
                <li>
                  <Link to="/about">О нас</Link>
                </li>
                <li>
                  <Link to="/catalog">Каталог</Link>
                </li>
                <li>
                  <Link to="/blog">Блог</Link>
                </li>
              </ul>
            </nav>
            <h1 className="font-regular pl-36 text-[1.6875rem]">
              <Link to="/">BB Jewerly</Link>
            </h1>
            <div className="flex items-center gap-5">
              <div className="flex w-fit items-center justify-center rounded-lg border-[0.0625rem] border-black bg-transparent py-[0.3125rem] text-black">
                <input
                  type="text"
                  placeholder="Поиск"
                  className="w-[10rem] bg-transparent px-2 font-karla placeholder-[#727272] outline-none placeholder:font-sans"
                />
                <img src={search} alt="" className="mr-2" />
              </div>
              <div className="flex items-center gap-9">
                <Link to="">
                  <img src={like} alt="" className="ml-4" />
                </Link>
                <Link to="">
                  <img src={cart} alt="" />
                </Link>
                <Link to="">
                  <img src={profile} alt="" className="pb-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
