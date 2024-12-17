export const Categories = ({ url, children }) => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:w-1/2 lg:w-1/3">
      <img
        src={url}
        alt="category"
        className="w-full h-auto rounded-t-lg object-cover max-w-[300px] sm:max-w-[400px]"
      />
      <div className="mt-4 text-center text-base sm:text-lg md:text-xl font-medium">
        {children}
      </div>
    </div>
  );
};
