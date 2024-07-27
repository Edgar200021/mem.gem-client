import { cn } from "../../lib/cn";

interface Props {
  className?: string;
  balance: number;
}

export const WalletBalance = ({ className, balance }: Props) => {
  return (
    <div className={cn("py-3 px-5 rounded-xl bg-gray-200", className)}>
      <div className="flex flex-col gap-y-1 tracking-tight">
        <span>Your wallet balance</span>
        <span className="text-2xl font-semibold">{balance} TON</span>
      </div>
    </div>
  );
};
