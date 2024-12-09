import React from "react";
import clsx from "clsx";

export const BlackButton = ({
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
        "flex h-12 w-48 items-center justify-center rounded-md border border-black px-4 py-2 text-black transition duration-[500ms] hover:border-hoverColor hover:text-hoverColor",
        className,
      )}
    >
      {children}
    </button>
  );
};
