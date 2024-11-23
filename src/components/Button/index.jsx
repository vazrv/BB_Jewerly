export const Button = ({ children }) => {
  return (
    <button className="border border-white rounded-md w-48 h-12 flex items-center justify-center py-2 pl-4 text-white">
      {children}
    </button>
  );
};
