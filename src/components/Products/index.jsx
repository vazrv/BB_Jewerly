export const Products = ({ url, children, price }) => {
  return (
    //ИСПОЛЬЗУЙ ЭТО ДЛЯ ТОВАРОВ
    <div className="flex flex-col p-4  rounded-lg ">
      <img src={url} alt={url} className="w-full h-auto rounded-t-lg" />
      <div className="mt-4">{children}</div>
      <div>{price}</div>
    </div>
  );
};
