import imgCatalog from "@assets/photo/catalog";
import { Products } from "@components/Products";
import { Link } from "react-router-dom";

export const CatalogBlock = () => {
  const Categ = [
    {
      id: 1,
      url: imgCatalog[3],
      children: "НАЧАЛЬНЫЙ КУЛОН",
      price: "9 000₽",
    },
    {
      id: 2,
      url: imgCatalog[4],
      children: "СЕРДЕЧНЫЙ КУЛОН",
      price: "9 000₽",
    },
    {
      id: 3,
      url: imgCatalog[5],
      children: "КУЛОН “БРИЛАНТ”",
      price: "10 000₽",
    },
    {
      id: 4,
      url: imgCatalog[1],
      children: "ПОДВЕСКА “ЛИСТ”",
      price: "8 000₽",
    },
    {
      id: 5,
      url: imgCatalog[2],
      children: "РУБИНОВЫЙ КУЛОН",
      price: "9 000₽",
    },
  ];

  return (
    <Link to="/Cart">
      <div>
        <div className="mb-3 flex justify-between">
          {Categ.map((item) => (
            <div
              key={item.id}
              className="group relative"
              style={{ width: "fit-content" }}
            >
              <Products
                url={item.url}
                children={item.children}
                price={item.price}
              />
              <div
                className="absolute left-0 top-0 h-full w-full border-[1px] border-black opacity-0 transition-all duration-200 group-hover:opacity-50"
                style={{ borderRadius: "1rem" }}
              />
            </div>
          ))}
        </div>
        <div className="mb-big flex justify-between">
          {Categ.map((item) => (
            <div
              key={item.id}
              className="group relative"
              style={{ width: "fit-content" }}
            >
              <Products
                url={item.url}
                children={item.children}
                price={item.price}
              />
              <div
                className="absolute left-0 top-0 h-full w-full border-[1px] border-black opacity-0 transition-all duration-200 group-hover:opacity-50"
                style={{ borderRadius: "1rem" }}
              />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};
