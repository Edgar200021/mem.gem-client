import { TOKEN_DATA } from "../../const/token";
import { cn } from "../../lib/cn";
import { Token } from "../Token/Token";

interface Props {
  className?: string;
}
  
export const TokenList = ({ className }: Props) => {
  return (
    <ul className={cn("flex gap-x-3  overflow-x-auto", className)}>
      {TOKEN_DATA.map((token, i) => (
        <li className="flex-grow min-w-[74px]  " key={i}>
          <Token {...token} />
        </li>
      ))}
    </ul>
  );
};
