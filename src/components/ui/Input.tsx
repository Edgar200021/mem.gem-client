import { ComponentProps } from "react";
import { cn } from "../../lib/cn";

import searchIcon from "../../assets/icons/search.svg";

const variants = {
  search: "",
  clear:
    "bg-transparent text-xs tracking-tight pr-2 pb-[6px]  border-b-[1px] border-b-gray-150 outline-none",
};

interface Props extends ComponentProps<"input"> {
  variant?: keyof typeof variants;
}

export const Input = ({ variant = 'clear', className, ...rest }: Props) => {
  if (variant === "search")
    return (
      <label
        className={cn(
          className,
          "py-[10px] px-[14px] flex items-center gap-x-3 rounded-xl border-gray-150 border-[1px]"
        )}
      >
        <img src={searchIcon} alt="search" />
        <input
          type="text"
          className="placeholder:text-gray-50 bg-transparent w-full outline-none "
          {...rest}
        />
      </label>
    );

  return (
    <input
      type="text"
      className={cn(className, variants[variant])}
      {...rest}
    />
  );
};
