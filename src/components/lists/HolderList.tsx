import { cn } from "../../lib/cn";
import { Holder } from "../Holder/Holder";

interface Props {
  className?: string;
}

export const HolderList = ({ className }: Props) => {
  return (
    <ul className={cn("space-y-4 p-5 bg-gray-200 rounded-xl", className)}>
      <li>
        <Holder />
      </li>
      <li>
        <Holder />
      </li>
    </ul>
  );
};
