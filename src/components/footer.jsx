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
    <footer className="bg-mainColor font-cormorantSC lg:p-10">
      <div className="container mx-auto py-4 px-4 md:px-10">
        <div>
          <nav className="flex flex-col gap-8 md:flex-row md:justify-between">
            {/* Про нас */}
            <ul>
              <p className="pb-3 text-lg md:pb-5">ПРО НАС</p>
              <li className="mb-3 font-karla text-sm md:text-[0.875rem]">
                <Link to="#">Оригинальность</Link>
              </li>
              <li className="mb-3 font-karla text-sm md:text-[0.875rem]">
                <Link to="#">Ваше мнение</Link>
              </li>
              <li className="mb-3 font-karla text-sm md:text-[0.875rem]">
                <Link to="#">Устойчивость</Link>
              </li>
              <li className="mb-3 font-karla text-sm md:text-[0.875rem]">
                <Link to="#">Возврат</Link>
              </li>
            </ul>

            {/* Обслуживание клиентов */}
            <ul>
              <p className="pb-3 text-lg md:pb-5">ОБСЛУЖИВАНИЕ КЛИЕНТОВ</p>
              <li className="mb-3 font-karla text-sm md:text-[0.875rem]">
                <Link to="#">Связаться с нами</Link>
              </li>
              <li className="mb-3 font-karla text-sm md:text-[0.875rem]">
                <Link to="#">Отслеживать ваш заказ</Link>
              </li>
              <li className="mb-3 font-karla text-sm md:text-[0.875rem]">
                <Link to="#">Доставка и возврат товара</Link>
              </li>
              <li className="mb-3 font-karla text-sm md:text-[0.875rem]">
                <Link to="#">Часто задаваемые вопросы</Link>
              </li>
            </ul>

            {/* Забота о материалах */}
            <ul>
              <p className="pb-3 text-lg md:pb-5">ЗАБОТА О МАТЕРИАЛАХ</p>
              <li className="mb-3 font-karla text-sm md:text-[0.875rem]">
                <Link to="#">Ремонт ювелирных изделий</Link>
              </li>
              <li className="mb-3 font-karla text-sm md:text-[0.875rem]">
                <Link to="#">Размер кольца</Link>
              </li>
              <li className="mb-3 font-karla text-sm md:text-[0.875rem]">
                <Link to="#">Аллергия на материалы</Link>
              </li>
              <li className="mb-3 font-karla text-sm md:text-[0.875rem]">
                <Link to="#">Советы по хранению</Link>
              </li>
            </ul>

            {/* Подписка */}
            <div className="flex flex-col gap-4 md:w-1/3">
              <p className="text-lg">
                Подпишитесь, чтобы постоянно узнавать о наших обновлениях
              </p>
              <div className="flex items-center rounded-lg border border-black bg-transparent p-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="flex-grow bg-transparent px-2 font-karla placeholder-[#727272] outline-none placeholder:font-sans"
                />
                <button className="px-4 text-[#727272]">Отправить</button>
              </div>
              <div className="flex justify-between">
                <FaInstagram size={25} />
                <FaTwitter size={25} />
                <FaYoutube size={25} />
                <FaLinkedin size={25} />
              </div>
            </div>
          </nav>
          <p className="mt-8 text-center text-[#727272] text-sm">
            © 2024 BB Jewelry
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
