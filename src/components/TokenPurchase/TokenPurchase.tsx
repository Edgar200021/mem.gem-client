import { cn } from "../../lib/cn";
import { formatPrice } from "../../lib/lib";
import { TokenFurhter } from "../../types/token";

interface Props extends Omit<TokenFurhter, "title" | ""> {
  className?: string;
}

export const TokenPurchase = ({
  className,
  created_by,
  img,
  percentage,
  price,
  token_title,
}: Props) => {
  return (
    <div className={cn("flex flex-col gap-y-[10px]", className)}>
      <div className="flex items-center gap-x-1 justify-start">
        <div className="size-[60px] rounded-full overflow-hidden">
          <img className="w-full h-full" src={img} alt={token_title} />
        </div>
        <span className="font-semibold uppercase tracking-tight">
          {token_title}
        </span>

        <div className="ml-auto flex flex-col gap-y-[2px] items-end">
          <span className="font-semibold text-2xl uppercase">
            {formatPrice(price)}
          </span>
          <span className="text-gray-0 text-[13px]">Last price</span>
        </div>
      </div>
    </div>
  );
};
