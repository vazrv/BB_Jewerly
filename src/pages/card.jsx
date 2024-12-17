import { Link } from "react-router-dom";
import chainImage from "@assets/photo/catalog/Frame 17-4.png";
import React from "react";
import trash from "@assets/icons/trash.svg";
import imgFavorite from "@assets/photo/catalog";
import { Products } from "@components/Products";

export const Card = () => {
  const Categ = [
    {
      id: 1,
      url: imgFavorite[3],
      children: "НАЧАЛЬНЫЙ КУЛОН",
      price: "9 000₽",
    },
    {
      id: 2,
      url: imgFavorite[4],
      children: "СЕРДЕЧНЫЙ КУЛОН",
      price: "9 000₽",
    },
    {
      id: 3,
      url: imgFavorite[5],
      children: "КУЛОН “БРИЛАНТ”",
      price: "10 000₽",
    },
    {
      id: 4,
      url: imgFavorite[1],
      children: "ПОДВЕСКА “ЛИСТ”",
      price: "8 000₽",
    },
    {
      id: 5,
      url: imgFavorite[2],
      children: "ПОДВЕСКА “ЛИСТ”",
      price: "8 000₽",
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between mt-big mb-big">
        {/* Корзина */}
        <div className="w-full md:w-[37rem]">
          <h1 className="font-cormorantSC text-3xl pb-3 text-center md:text-left">Корзина</h1>
          <hr />

          <div className="pt-12 space-y-12">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center">
                <img src={chainImage} alt="item" className="w-1/2 md:w-auto" />
                <div className="ml-0 md:ml-10 mt-4 md:mt-0">
                  <div className="flex justify-between font-karla">
                    <p className="text-2xl text-[#515151]">{`Начальный кулон`}</p>
                    <img className="cursor-pointer" src={trash} alt="trash" />
                  </div>
                  <p className="text-xl text-[#7E7E7E]">Количество: 1</p>
                  <p className="text-xl text-[#8A8A8A] mt-4">₽9000</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Оформление заказа */}
        <div className="mt-14 md:mt-0 w-full md:w-[25.625rem] rounded-xl border border-black p-10 font-cormorantSC text-xl h-96">
          <p className="mb-5 text-center text-2xl">Оформление заказа</p>
          <hr className="h-0 border border-[#BFBFBF]" />
          <div className="my-6 text-[#6B6B6B]">
            <div className="flex justify-between pb-7">
              <p>1 Начальный кулон</p>
              <p>₽9000</p>
            </div>
            <div className="flex justify-between">
              <p>1 Начальный кулон</p>
              <p>₽9000</p>
            </div>
          </div>
          <hr className="h-0 border border-[#BFBFBF] mb-3" />
          <div className="flex justify-between mb-7 text-2xl">
            <p>Итог</p>
            <p>₽18000</p>
          </div>
          <Link to="/complete">
            <button className="flex h-12 w-full  items-center justify-center rounded-md border border-black px-4 py-2 text-black transition duration-[500ms] hover:border-hoverColor hover:text-hoverColor">ОПЛАТИТЬ</button>
          </Link>
        </div>
      </div>

      {/* Блок с карточками товаров */}
      <div>
        <p className="font-cormorantSC text-2xl my-7 text-center">Позвольте себе больше</p>
        <hr className="mb-8" />
        <Link to="/Catalog">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Categ.map((item) => (
              <Products
                key={item.id}
                url={item.url}
                children={item.children}
                price={item.price}
              />
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};
