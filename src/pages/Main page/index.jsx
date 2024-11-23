// Components
import { Button } from "@components/Button";
import { Categories } from "@components/Categories";
import { Products } from "@components/Products";

// Assets
import catalogPhoto from "@assets/photo/catalog/Rectangle 38.png";
import icon from "@assets/photo/catalog/Frame 17-1.png";
import mainPhoto from "@assets/photo/main/FirstFrameMain.jpg";

export const MainPage = () => {
  return (
    <>
      <div
        className="flex h-[40rem] flex-col justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${mainPhoto})` }}
      >
        <div className="container mx-auto"></div>
        <div className="flex flex-col items-center gap-8 text-white">
          <h1 className="font-regular font-cormorantSC text-[80px]">
            Осенний каталог
          </h1>
          <p className="font-regular font-karla text-[1.25rem]">
            Новая коллекция уже в продаже, ищите в каталоге
          </p>
          <Button>Каталог</Button>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <Categories url={catalogPhoto} children={"Категория"} />
        <Categories url={icon} children={"Кулоны"} />
        <Categories url={catalogPhoto} children={"Серьги"} />
        <Categories url={catalogPhoto} children={"Категория"} />
        <Categories url={catalogPhoto} children={"Категория"} />
        <Products url={icon} children={"НАЧАЛЬНЫЙ КУЛОН"} price={"₽9000"} />
      </div>
    </>
  );
};
