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
    <header className="bg-mainColor font-cormorantSC">
      <div className="container mx-auto py-4">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <nav className="mb-4 lg:mb-0">
            <ul className="flex gap-4 text-lg lg:gap-9 lg:text-[1.25rem]">
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
          <h1 className="font-regular text-xl lg:pl-36 lg:text-[1.6875rem]">
            <Link to="/">BB Jewerly</Link>
          </h1>
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-5">
            <div className="flex w-full items-center justify-center rounded-lg border border-black bg-transparent py-2 text-black lg:w-auto lg:py-[0.3125rem]">
              <input
                type="text"
                placeholder="Поиск"
                className="w-full bg-transparent px-2 font-karla placeholder-[#727272] placeholder:font-sans outline-none lg:w-[10rem]"
              />
              <img src={search} alt="" className="mr-2" />
            </div>
            <div className="flex items-center gap-4 lg:gap-9">
              <Link to="/favorite">
                <img src={like} alt="" className="ml-4" />
              </Link>
              <Link to="/card">
                <img src={cart} alt="" />
              </Link>
              <Link to="/profile">
                <img src={profile} alt="" className="pb-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

