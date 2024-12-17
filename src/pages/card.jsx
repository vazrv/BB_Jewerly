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
    <div className="container mx-auto">
      <div className="flex justify-between mt-big mb-big">
        <div className="w-[37rem] ">
          <h1 className="font-cormorantSC text-3xl pb-3">Корзина</h1>
          <hr />
          <div className="flex pt-12">
            <img src={chainImage} alt="" />
            <div className="ml-10">
              <div className="flex font-karla">
                <p className="text-2xl text-[#515151] pr-28">Начальный кулон</p>
                <img className="cursor-pointer" src={trash} alt="" />
              </div>
              <p className="text-xl text-[#7E7E7E]">Количество:  1</p>
              <p className="text-xl text-[#8A8A8A] flex align-self-end mt-40">₽9000</p>
            </div>
          </div>
          <div className="flex pt-12">
            <img src={chainImage} alt="" />
            <div className="ml-10">
              <div className="flex font-karla">
                <p className="text-2xl text-[#515151] pr-28">Начальный кулон</p>
                <img className="cursor-pointer" src={trash} alt="" />
              </div>
              <p className="text-xl text-[#7E7E7E]">Количество:  1</p>
              <p className="text-xl text-[#8A8A8A] flex align-self-end mt-40">₽9000</p>
            </div>
          </div>
        </div>

        <div className=" rounded-xl border border-black p-10 font-cormorantSC text-xl h-96 mt-14">
          <p className="mb-5 text-center text-2xl">Оформление заказа</p>
          <hr className="h-0 border border-[#BFBFBF]" />
          <div className="my-6 text-[#6B6B6B] w-[25.625rem]">
            <div className="flex justify-between pb-7">
              <p className="pl-2">1 Начальный кулон</p>
              <p>₽9000</p>
            </div>
            <div className="flex justify-between">
              <p className="pl-2">1 Начальный кулон</p>
              <p>₽9000</p>
            </div>
          </div>
          <hr className="h-0 border border-[#BFBFBF] mb-3" />
          <div className="flex justify-between mb-7 text-2xl">
            <p className="pl-2">Итог</p>
            <p>₽18000</p>
          </div>
          <Link to="/complete">
            <button className="flex h-12 w-[25.625rem] items-center justify-center rounded-md border border-black px-4 py-2 text-black transition duration-[500ms] hover:border-hoverColor hover:text-hoverColor">ОПЛАТИТЬ</button>
          </Link>
        </div>
      </div>
      <div>
        <p className="font-cormorantSC text-2xl my-7 text-center">Позвольте себе больше</p>
        <hr className="mb-8" />
        <Link to="/Catalog">
          <div className="mb-big flex justify-between">
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
      </div >
    </div>
  );
};
