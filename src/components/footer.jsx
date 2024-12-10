// libs
import React from "react";
import { Link } from "react-router-dom";

// Icons
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-mainColor font-cormorantSC">
      <div className="container mx-auto py-4">
        <div>
          <nav className="flex justify-between p-10">
            <ul className="">
              <p className="pb-5">ПРО НАС</p>
              <li className="mb-[1rem] font-karla text-[0.875rem]">
                <Link to="#">Оригинальность</Link>
              </li>
              <li className="mb-[1rem] font-karla text-[0.875rem]">
                <Link to="#">Ваше мнение</Link>
              </li>
              <li className="mb-[1rem] font-karla text-[0.875rem]">
                <Link to="#">Устойчивость</Link>
              </li>
              <li className="mb-[1rem] font-karla text-[0.875rem]">
                <Link to="#">Возврат</Link>
              </li>
            </ul>

            <ul>
              <p className="pb-5">ОБСЛУЖИВАНИЕ КЛИЕНТОВ</p>
              <li className="mb-[1rem] font-karla text-[0.875rem]">
                <Link to="#">Связаться с нами</Link>
              </li>
              <li className="mb-[1rem] font-karla text-[0.875rem]">
                <Link to="#">Отслеживать ваш заказ</Link>
              </li>
              <li className="mb-[1rem] font-karla text-[0.875rem]">
                <Link to="#">Доставка и возврат товара</Link>
              </li>
              <li className="mb-[1rem] font-karla text-[0.875rem]">
                <Link to="#">Часто задаваемые вопросы</Link>
              </li>
            </ul>

            <ul className="">
              <p className="pb-5">ЗАБОТА О МАТЕРИАЛАХ</p>
              <li className="mb-[1rem] font-karla text-[0.875rem]">
                <Link to="#">Ремонт ювелирных изделий</Link>
              </li>
              <li className="mb-[1rem] font-karla text-[0.875rem]">
                <Link to="#">Размер кольца</Link>
              </li>
              <li className="mb-[1rem] font-karla text-[0.875rem]">
                <Link to="#">Аллергия на материалы</Link>
              </li>
              <li className="mb-[1rem] font-karla text-[0.875rem]">
                <Link to="#">Советы по хранению</Link>
              </li>
            </ul>

            <div className="w-1/3">
              <p className="w-4/5 pb-5 text-[20px]">
                Подпишитесь, чтобы постоянно узнавать о наших обновлениях
              </p>
              <div className="flex w-fit items-center justify-center rounded-lg border-[0.0625rem] border-black bg-transparent py-[0.3125rem] text-black">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-[14rem] bg-transparent px-2 font-karla placeholder-[#727272] outline-none placeholder:font-sans"
                />
                <p className="px-2 text-[#727272]">Отправить</p>
              </div>
              <div className="mt-8 flex w-4/5 justify-between">
                <FaInstagram size={25} />
                <FaTwitter size={25} />
                <FaYoutube size={25} />
                <FaLinkedin size={25} />
              </div>
            </div>
          </nav>
          <p className="text-center text-[#727272]">© 2024 BB Jewerly</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
