import { FaPencilAlt } from "react-icons/fa";

export const Profile = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Заголовок */}
      <h1 className="my-10 text-center font-karla text-2xl md:text-4xl">
        Профиль
      </h1>

      {/* Контент */}
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
        {/* Личные данные */}
        <div className="w-full rounded-xl border border-black p-6 font-cormorantSC text-lg md:text-xl lg:w-[40%] lg:h-fit lg:p-12">
          <div className="flex items-center pb-6">
            <p className="flex-grow">Номер телефона: +7 888 999 76 67</p>
            <FaPencilAlt className="cursor-pointer" />
          </div>
          <div className="flex items-center pb-6">
            <p className="flex-grow">Почта: skibidi_pro@gmail.com</p>
            <FaPencilAlt className="cursor-pointer" />
          </div>
          <div className="flex items-center">
            <p className="flex-grow">Карта: Тинькофф ***5479</p>
            <FaPencilAlt className="cursor-pointer" />
          </div>
        </div>

        {/* Активные заказы */}
        <div className="w-full rounded-xl border border-black mb-10 p-6 font-cormorantSC text-lg md:text-xl lg:w-[40%]">
          <p className="mb-5 text-center text-xl md:text-2xl">
            Активные заказы
          </p>
          <hr className="h-0 border border-[#BFBFBF]" />
          <div className="my-6 text-[#6B6B6B]">
            <div className="flex justify-between pb-4">
              <p>№454657675478</p>
              <p>₽18,000</p>
            </div>
            <div className="flex justify-between">
              <p>№929676790885</p>
              <p>₽19,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
