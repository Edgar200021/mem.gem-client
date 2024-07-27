import { BuyToken } from "../components/BuyToken/BuyToken";
import { PurchaseAmount } from "../components/PurchaseAmount/PurchaseAmount";
import { TokenPurchase } from "../components/TokenPurchase/TokenPurchase";
import { TransactionFee } from "../components/ui/TransactionFee";
import { WalletBalance } from "../components/ui/WalletBalance";
import { TOKEN_FURTHER_DATA } from "../const/token";
import { cn } from "../lib/cn";

interface Props {
  className?: string;
}

export const TokenPurchasePage = ({ className }: Props) => {
  return (
    <main className={cn("py-5", className)}>
      <div className="box flex flex-col gap-y-6">
        <WalletBalance balance={12} />
        <TokenPurchase {...TOKEN_FURTHER_DATA[0]} />
        <PurchaseAmount />
        <TransactionFee fee={0.1} />
        <BuyToken />
      </div>
    </main>
  );
};
