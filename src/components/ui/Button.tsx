import { ComponentProps } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/cn";

const variants = {
  primary:
    "max-w-[143px] py-3 px-[10px] bg-blue rounded-[10px] text-xs tracking-[-0.03em] flex items-center justify-center w-full",
  secondary:
    "max-w-[143px] py-3 px-[10px] bg-gray-100 rounded-[10px] text-xs tracking-[-0.03em] flex items-center justify-center w-full",
  clear: "bg-none",
};

interface Props extends ComponentProps<"button"> {
  variant?: keyof typeof variants;
  to?: string;
}

export const Button = ({
  className,
  variant = "primary",
  children,
  to,
  ...rest
}: Props) => {
  if (to !== undefined) {
    return (
      <NavLink to={to} className={() => cn(className, variants[variant])}>
        {children}
      </NavLink>
    );
  }
  return (
    <button className={cn(className, variants[variant])} {...rest}>
      {children}
    </button>
  );
};
