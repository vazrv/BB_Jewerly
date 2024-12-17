import { CatalogBlock } from "@components/CatalogBlock";

export const Catalog = () => {
  const categories = [
    "Ожерелья",
    "Кулоны",
    "Серьги",
    "Подвески",
    "Кольца",
  ];

  return (
    <div className="container mx-auto px-4">
      {categories.map((category, index) => (
        <div key={index} className="mb-12">
          <p className="my-8 text-center font-cormorantGaramond text-2xl md:text-3xl lg:text-4xl">
            {category}
          </p>
          <CatalogBlock />
          {/* Разделитель для категорий, кроме последней */}
          {index < categories.length - 1 && (
            <hr className="mt-8 border-[0.5px] border-[#CAC5C2]" />
          )}
        </div>
      ))}
    </div>
  );
};
