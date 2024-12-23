import { Link } from "react-router-dom";
import { Products } from "@components/Products";
import imgFavorite from "@assets/photo/catalog";

export const Favorite = () => {
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
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Заголовок */}
      <h1 className="my-10 text-center font-karla text-2xl md:text-4xl">
        Избранное
      </h1>

      {/* Карточки */}
      <Link to="/Cart">
        <div className="w-2/3 mx-auto lg:w-full grid grid-cols-1 gap-6 mb-big sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
