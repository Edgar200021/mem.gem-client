import { Characteristics } from "../components/Characteristics/Characteristics";
import { Link } from "../components/Link/Link";
import { HolderList } from "../components/lists/HolderList";
import { ShareToken } from "../components/ShareToken/ShareToken";
import { Button } from "../components/ui/Button";
import { Discription } from "../components/ui/Discription";
import { PATHS } from "../const/route";
import { TOKEN_CHARACTERISTICS_DATA } from "../const/token";
import { cn } from "../lib/cn";

interface Props {
  className?: string;
}

export const TokenAboutPage = ({ className }: Props) => {
  return (
    <main className={cn("", className)}>
      <div className="box flex flex-col gap-y-6 w-full">
        <Discription text="The most famous uncle is creating his coin" />
        <Characteristics data={TOKEN_CHARACTERISTICS_DATA} />
        <div className="flex gap-x-[10px]">
          <Link variant="channel" />
          <Link variant="chat" />
        </div>
        <section>
          <h2 className="text-xl font-semibold mb-6 uppercase tracking-tight">
            Token link
          </h2>
          <ShareToken url="http://Suckmyduck.com" />
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-6 uppercase tracking-tight">
            Holders
          </h2>
          <HolderList />
        </section>
        <Button to={PATHS.PURCHASE} className="!max-w-full ">
          Buy
        </Button>
      </div>
    </main>
  );
};
