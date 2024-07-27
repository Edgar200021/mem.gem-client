import { cn } from "../../lib/cn";
import { Transaction } from "../Transaction/Transaction";

interface Props {
  className?: string;
}

export const TransactionList = ({ className }: Props) => {
  return (
    <ul className={cn("space-y-4 p-5 bg-gray-200 rounded-xl", className)}>
      <li>
        <Transaction />
      </li>
      <li>
        <Transaction />
      </li>
    </ul>
  );
};
