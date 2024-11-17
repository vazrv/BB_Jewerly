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
            <img src={mainPhoto} alt="" />
            <div style={{ backgroundImage: `url(${mainPhoto})` }}>
                <Button>Каталог</Button>
            </div>
            <div className="container mx-auto">
                <div className="flex gap-5 justify-between">
                    <Categories url={catalogPhoto} children={"Категория"} />
                    <Categories url={icon} children={"Кулоны"} />
                    <Categories url={catalogPhoto} children={"Серьги"} />
                    <Categories url={catalogPhoto} children={"Категория"} />
                    <Categories url={catalogPhoto} children={"Категория"} />
                    <Products url={icon} children={"НАЧАЛЬНЫЙ КУЛОН"} price={"₽9000"} />
                </div>
            </div>
        </>
    )
}
