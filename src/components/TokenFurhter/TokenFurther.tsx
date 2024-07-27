import { cn } from "../../lib/cn";
import { formatPrice } from "../../lib/lib";
import { TokenFurhter as ITokenFurther } from "../../types/token";
import { ProgressCircle } from "../ui/ProgressCircle";

interface Props extends ITokenFurther {
  className?: string;
}

export const TokenFurther = ({
  className,
  title,
  token_title,
  price,
  created_by,
  img,
  percentage,
}: Props) => {
  return (
    <div className={cn(className, "flex gap-x-2 justify-start")}>
      <div className="w-10 h-10 rounded-full overflow-hidden ">
        <img className="w-full h-full" src={img} alt={title} />
      </div>

      <div className="flex flex-col">
        <span className="font-bold uppercase tracking-[-0.02em]">
          {title}|{token_title}
        </span>
        <span className="text-green text-xs tracking-[-0.03em] ">
          Market cup {formatPrice(price)}
        </span>
        <span className="text-gray-50 text-[10px]">
          created by {created_by}
        </span>
      </div>

      <ProgressCircle percentage={percentage} />
    </div>
  );
};
