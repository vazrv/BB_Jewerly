import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import like from "@assets/icons/like.svg";
import cart from "@assets/icons/cart.svg";
import profile from "@assets/icons/profile.svg";


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
                        <h1 className="text-[1.6875rem] font-regular postion-absolute ">BB Jewerly</h1>
                        <div className="flex gap-5 items-center">
                            <input type="text" placeholder="Поиск" className="border-[0.0625rem] border-black rounded-lg py-[0.3125rem] pl-4" />
                            <div className="flex gap-9 items-center">
                                <a href=""><img src={like} alt="" className="ml-4" /></a>
                                <a href=""><img src={cart} alt="" /></a>
                                <a href=""><img src={profile} alt="" className="pb-1" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
