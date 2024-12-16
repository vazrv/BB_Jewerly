export const Products = ({ url, children, price }) => {
  return (
    //ТОВАР
    <div className="flex flex-col rounded-lg p-4">
      <img src={url} alt={url} className="h-auto w-full rounded-t-lg" />
      <div className="mt-4">{children}</div>
      <h1 className="text-[#727272]">{price}</h1>
    </div>
  );
};
