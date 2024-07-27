import { TOKEN_FURTHER_DATA } from "../../const/token";
import { cn } from "../../lib/cn";
import { TokenFurther } from "../TokenFurhter/TokenFurther";

interface Props {
  className?: string;
}

export const TokenFurtherList = ({ className }: Props) => {
  return (
    <ul
      className={cn(
        className,
        "flex flex-col gap-y-6 max-h-[280px] overflow-y-auto"
      )}
    >
      {TOKEN_FURTHER_DATA.map((token, i) => (
        <li key={i}>
          <TokenFurther {...token} />
        </li>
      ))}
    </ul>
  );
};
