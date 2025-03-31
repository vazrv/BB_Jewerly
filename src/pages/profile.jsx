import { useState } from "react";
import { FaPencilAlt, FaCheck, FaTimes } from "react-icons/fa";

export const Profile = () => {
  // Состояния для редактируемых полей
  const [phone, setPhone] = useState("+7 888 999 76 67");
  const [email, setEmail] = useState("skibidi_pro@gmail.com");
  const [card, setCard] = useState("Тинькофф ***5479");

  // Состояния для режима редактирования
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const handleEditClick = (field, value) => {
    setEditingField(field);
    setTempValue(value);
  };

  const handleSave = () => {
    if (editingField === "phone") setPhone(tempValue);
    if (editingField === "email") setEmail(tempValue);
    if (editingField === "card") setCard(tempValue);
    setEditingField(null);
  };

  const handleCancel = () => {
    setEditingField(null);
  };

  const renderEditableField = (field, value, label) => {
    if (editingField === field) {
      return (
        <div className="flex items-center pb-6">
          <input
            type="text"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="flex-grow bg-transparent border-b border-black focus:outline-none"
            autoFocus
          />
          <div className="flex ml-2">
            <FaCheck
              className="cursor-pointer text-green-600 mr-2"
              onClick={handleSave}
            />
            <FaTimes
              className="cursor-pointer text-red-600"
              onClick={handleCancel}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-center pb-5">
        <p className="flex-grow">{label}: {value}</p>
        <FaPencilAlt
          className="cursor-pointer"
          onClick={() => handleEditClick(field, value)}
        />
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      {/* Заголовок */}
      <h1 className="my-10 text-center font-karla text-2xl md:text-4xl">
        Профиль
      </h1>

      {/* Контент */}
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
        {/* Личные данные */}
        <div className="w-full rounded-xl border border-black p-6 font-cormorantSC text-lg md:text-xl lg:w-[40%] lg:h-56 lg:p-12">
          {renderEditableField("phone", phone, "Номер телефона")}
          {renderEditableField("email", email, "Почта")}
          {renderEditableField("card", card, "Карта")}
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