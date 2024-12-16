import { CatalogBlock } from "@components/CatalogBlock";

export const Catalog = () => {
  return (
    <div className="container mx-auto">
      <div>
        <p className="my-12 text-center font-cormorantGaramond text-4xl">
          Ожерелья
        </p>
        <CatalogBlock />
        <hr className="border-[0.5px] border-[#CAC5C2]" />
      </div>
      <div>
        <p className="my-12 text-center font-cormorantGaramond text-4xl">
          Кулоны
        </p>
        <CatalogBlock />
        <hr className="border-[0.5px] border-[#CAC5C2]" />
      </div>
      <div>
        <p className="my-12 text-center font-cormorantGaramond text-4xl">
          Серьги
        </p>
        <CatalogBlock />
        <hr className="border-[0.5px] border-[#CAC5C2]" />
      </div>
      <div>
        <p className="my-12 text-center font-cormorantGaramond text-4xl">
          Подвески
        </p>
        <CatalogBlock />
        <hr className="border-[0.5px] border-[#CAC5C2]" />
      </div>
      <div>
        <p className="my-12 text-center font-cormorantGaramond text-4xl">
          Кольца
        </p>
        <CatalogBlock />
      </div>
    </div>
  );
};
