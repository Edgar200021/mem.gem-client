import { cn } from "../../lib/cn";
import { formatPrice } from "../../lib/lib";
import { Token as IToken } from "../../types/token";

interface Props extends IToken {
  className?: string;
}

export const Token = ({ className, img, price, title }: Props) => {
  return (
    <div className={cn("flex flex-col ", className)}>
      <div className="max-w-[74px] h-[74px] w-full  rounded-[10px] overflow-hidden mb-1">
        <img className="w-full h-full object-cover " src={img} alt={title} />
      </div>

      <span className="uppercase text-xs tracking-[-0.03em] font-bold">
        {title}
      </span>
      <span className="text-green text-[8px] tracking-tighter uppercase ">
        {formatPrice(price)}
      </span>
    </div>
  );
};
