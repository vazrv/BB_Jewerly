import cartPhoto from "@assets/photo/cart/cartPhoto.png";
import { BlackButton } from "@components/Button/index black";
import BigLike from "@assets/icons/BigLike.svg";

import { Link } from "react-router-dom";
import { Products } from "@components/Products";
import imgFavorite from "@assets/photo/catalog";

export const Cart = () => {
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
    <div className="container mx-auto mt-big px-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Изображение товара */}
        <img className="w-full md:w-[25.5rem] h-auto" src={cartPhoto} alt="" />

        {/* Информация о товаре */}
        <div className="w-full md:w-[600px] mb-20 mt-6 md:mt-0 md:ml-60">
          <Link to="/catalog">
            <p className="font-karla text-[#515151]">ВЕРНУТЬСЯ К ВЫБОРУ</p>
          </Link>
          <div className="flex justify-between mt-5">
            <p className="font-cormorantSC text-3xl text-center md:text-left">СЕРДЕЧНЫЙ КУЛОН</p>
            <Link to="#">
              <img className="transition duration-300 ease-in-out hover:scale-110" src={BigLike} alt="" />
            </Link>
          </div>
          <p style={{ color: 'rgba(0, 0, 0, 0.54)' }} className="font-karla font-bold text-2xl mt-5 text-center md:text-left">₽9000</p>
          <p className="font-karla text-[1.25rem] w-full md:w-4/5 mt-5 text-center md:text-left">
            Форма и размер подвесок сердца могут варьироваться от небольших и
            минималистичных до крупных и более декоративных. Небольшие модели
            идеальны для ежедневного ношения и подчеркивают изящность, в то время
            как более крупные и украшенные модели лучше подходят для
            специальных случаев.
          </p>
          <BlackButton className="mt-10 w-full ">В КОРЗИНУ</BlackButton>
        </div>
      </div>

      <hr />

      {/* Рекомендации */}
      <div className="my-7 text-center">
        <p className="font-cormorantSC text-2xl">Рекомендовано вам</p>
        <p className="font-karla text-[1.10rem] text-[#515151]">на основе вашего поиска</p>
      </div>

      <Link to="/Catalog">
        <div className="mb-big w-2/3 mx-auto lg:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
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
  );
};
