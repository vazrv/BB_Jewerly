import { FaPencilAlt } from "react-icons/fa";

export const Profile = () => {
  return (
    <div className="container mx-auto">
      <h1 className="m-[3.125rem] text-center font-karla text-4xl">Профиль</h1>
      <div className="mb-big flex justify-between">
        <div className="w-[500px] rounded-xl border border-black p-10 font-cormorantSC text-xl">
          <div className="flex pb-10">
            <p className="mr-7">Ваш номер телефона: + 7 888 999 76 67</p>
            <FaPencilAlt className="cursor-pointer" />
          </div>
          <div className="flex pb-10">
            <p className="mr-[58px]">Ваша почта: skibidi_pro@gmail.com</p>
            <FaPencilAlt className="cursor-pointer" />
          </div>
          <div className="flex">
            <p className="mr-[74px]">Карта оплаты: Тинькофф ***5479</p>
            <FaPencilAlt className="cursor-pointer" />
          </div>
        </div>

        <div className="w-[500px] rounded-xl border border-black p-10 font-cormorantSC text-xl">
          <p className="mb-5 text-center text-2xl">Активные заказы</p>
          <hr className="h-0 border border-[#BFBFBF]" />
          <div className="my-6 text-[#6B6B6B]">
            <div className="flex pb-7">
              <p className="pl-2 pr-52">№454657675478</p>
              <p>₽18000</p>
            </div>
            <div className="flex">
              <p className="pl-2 pr-52">№929676790885</p>
              <p>₽19000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
