'use client'
import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  customStyle?: string;
  size?: "sm" | "nm" | "np";
  variant?:
    | "primary"
    | "outline"
    | "outlineDark"
    | "transparent"
    | "black"
    | "white";

  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}

const Button = ({
  title,
  customStyle,
  variant = "white",
  size = "nm",
  startIcon,
  endIcon,
  ...rest
}: ButtonProps) => {
  const variants = {
    primary: "bg-green text-dark-blue",
    outline: "bg-none border-2 text-white border-white",
    outlineDark: "bg-none border-2 text-dark-blue border-dark-blue",
    transparent: "bg-none border-b px-1",
    black: "text-white bg-dark-blue",
    white: "text-dark-blue bg-white",
  };

  const sizes = {
    sm: "h-10 px-10 py-2 font-bold",
    nm: "h-[60px] px-14 py-4 text-xl font-bold",
    np: "text-xl font-bold",
  };

  return (
    <button
      {...rest}
      className={clsx(
        "group flex items-center w-full justify-center rounded-full transition-all duration-500 gap-3 hover:gap-8 disabled:opacity-75",
        customStyle,
        variants[variant],
        sizes[size]
      )}
    >
      {startIcon && <div className="group-hover:inline-flex">{startIcon}</div>}

      {title}

      {endIcon && (
        <div className="group-hover:inline-flex duration-500 transition-all">
          {endIcon}
        </div>
      )}
    </button>
  );
};

export default Button;
