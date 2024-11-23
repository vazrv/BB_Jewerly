import Header from "../../components/header";
import { Button } from "../../components/Button";
import { Categories } from "../../components/Categories";
import catalogPhoto from "../../assets/photo/catalog/Rectangle 38.png";
import icon from "../../assets/photo/catalog/Frame 17-1.png";
import { Products } from "../../components/Products";
import mainPhoto from "../../assets/photo/main/FirstFrameMain.jpg";

export const MainPage = () => {
    return (
        <>
            {/* бебра */}
            <Header />
            <div className="bg-cover bg-center h-[40rem]" style={{ backgroundImage: `url(${mainPhoto})` }}>
                <div className="container mx-auto"></div>
                <div className="flex flex-col items-center text-white">
                    <h1 className="text-[2.25rem] font-regular">Осенний каталог</h1>
                    <p className="text-[1.25rem] font-regular">Новая коллекция уже в продаже, ищите в каталоге</p>
                    <Button className="">Каталог</Button>
                </div>
            </div>
            <div className="flex gap-5 justify-between">
                <Categories url={catalogPhoto} children={"Категория"} />
                <Categories url={icon} children={"Кулоны"} />
                <Categories url={catalogPhoto} children={"Серьги"} />
                <Categories url={catalogPhoto} children={"Категория"} />
                <Categories url={catalogPhoto} children={"Категория"} />
                <Products url={icon} children={"НАЧАЛЬНЫЙ КУЛОН"} price={"₽9000"} />
            </div>
        </>
    )
}
