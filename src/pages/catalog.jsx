import { CatalogBlock } from "@/components/CatalogBlock";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/products";

const CATEGORIES = [
  "Ожерелья",
  "Кулоны",
  "Серьги",
  "Подвески",
  "Кольца",
];

export const Catalog = () => (
  <div className="container mx-auto px-4">
    {CATEGORIES.map((category, index) => (
      <CategorySection
        key={category}
        category={category}
        isLast={index === CATEGORIES.length - 1}
      />
    ))}
  </div>
);

const CategorySection = ({ category, isLast }) => {
  const { data: allProducts, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 60 * 1000,
  });

  // Фильтруем продукты по категории
  const products = allProducts?.filter(product => 
    product.category === category
  ) || [];

  return (
    <div className="mb-12">
      <h2 className="my-8 text-center font-cormorantGaramond text-2xl md:text-3xl lg:text-4xl">
        {category}
      </h2>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#CAC5C2] border-t-[#8B8581]"></div>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-4">
          Не удалось загрузить {category}
        </div>
      ) : (
        <CatalogBlock products={products} />
      )}

      {!isLast && <hr className="mt-8 border-[0.5px] border-[#CAC5C2]" />}
    </div>
  );
};