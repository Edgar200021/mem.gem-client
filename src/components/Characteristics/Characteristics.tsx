import { cn } from "../../lib/cn";
import { formatPrice } from "../../lib/lib";

const variants = {
  xs: "text-[10px]",
  sm: "text-sm",
  md: "text-base",
};

interface Props {
  className?: string;
  data: Record<string, number | string>;
  variant?: keyof typeof variants;
}
export const Characteristics = ({ className, data, variant = "md" }: Props) => {
  return (
    <div className={className}>
      <table className={cn("w-full rounded-xl bg-gray-200   justify-between ")}>
        <tbody
          className={cn("w-full flex flex-col gap-y-6 py-[18px] px-5", {
            "gap-y-1": variant === "xs",
          })}
        >
          {Object.entries(data).map(([key, value]) => {
            return (
              <tr
                key={key  }
                className={cn(
                  "flex items-center justify-between pb-2 border-b-gray-150 border-b-[1px]",
                  {
                    "pb-1": variant === "xs" || variant === "sm",
                  }
                )}
              >
                <td
                  className={cn(
                    "text-gray-100 tracking-tight",
                    variants[variant]
                  )}
                >
                  {key}
                </td>
                <td className={cn("tracking-tight", variants[variant])}>
                  {key.toLowerCase() === "price" ? formatPrice(+value) : value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
