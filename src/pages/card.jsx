import chainImage from "@assets/photo/catalog/Frame 17-4.png";
import { Link } from "react-router-dom";
import trash from "@assets/icons/trash.svg";

export const Card = () => {
  return (
    <div className="container mx-auto">
      <div className="w-[37rem] mt-big">
        <h1 className="font-cormorantSC text-3xl pb-3">Корзина</h1>
        <hr />
        <div className="flex py-12">
          <img src={chainImage} alt="" />
          <div className="ml-10">
            <div className="flex font-karla">
              <p className="text-2xl text-[#515151] pr-28">Начальный кулон</p>
              <img className="cursor-pointer" src={trash} alt="" />
            </div>
            <p className="text-xl text-[#7E7E7E]">Количество:  1</p>
            <p className="text-xl text-[#8A8A8A] flex align-self-end">₽9000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
