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
    <div className="container mx-auto">
      <h1 className="m-[3.125rem] text-center font-karla text-4xl">
        Избранное
      </h1>
      <Link to="/Cart">
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
    </div>
  );
};
