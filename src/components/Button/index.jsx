import React from "react";
import clsx from "clsx";

export const Button = ({
  children,
  className,
  onClick = () => {
    console.log("Skibidi");
  },
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(
        "flex h-12 w-48 items-center justify-center rounded-md border border-white px-4 py-2 text-white",
        className,
      )}
    >
      {children}
    </button>
  );
};
