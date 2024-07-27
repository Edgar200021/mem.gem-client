import { Characteristics } from "../components/Characteristics/Characteristics";
import { Chart } from "../components/Chart/Chart";
import { TransactionList } from "../components/lists/TransactionList";
import { VolumeList } from "../components/lists/VolumeList";
import { TOKEN_CHARACTERISTICS_DATA } from "../const/token";
import { cn } from "../lib/cn";

interface Props {
  className?: string;
}

export const TokenTradePage = ({ className }: Props) => {
  return (
    <main className={cn("", className)}>
      <div className="box flex flex-col gap-y-6 w-full">
        <Characteristics data={TOKEN_CHARACTERISTICS_DATA} className="mb-3" />

        <section>
          <h2 className="text-xl font-semibold mb-6 uppercase tracking-tight">
            volumes
          </h2>
          <VolumeList />
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-6 uppercase tracking-tight">
            chart
          </h2>
          <Chart />
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-6 uppercase tracking-tight">
            latest transactions
          </h2>
          <TransactionList />
        </section>
      </div>
    </main>
  );
};
