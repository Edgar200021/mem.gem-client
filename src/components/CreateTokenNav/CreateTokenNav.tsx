import userIcon from "../../assets/icons/user.svg";
import { PATHS } from "../../const/route";
import { cn } from "../../lib/cn";
import { Button } from "../ui/Button";

interface Props {
  className?: string;
}

export const CreateTokenNav = ({ className }: Props) => {
  return (
    <div className={cn("bg-gray-200 py-[18px] px-5 rounded-[10px]", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-x-[10px] ">
          <span className="uppercase font-bold text-xl tracking-[-0.02em]">
            0 GOOSE
          </span>
          <Button
            variant="clear"
            className="size-4 text-[10px] text-blue rounded-full border-[1px] border-blue/70 flex items-center justify-center"
          >
            i
          </Button>
        </div>
        <Button variant="clear" className="w-4 h-5">
          <img className="w-full h-full" src={userIcon} alt="user" />
        </Button>
      </div>
      <div className="flex items-center justify-between gap-x-2">
        <Button to={PATHS.CREATE_TOKEN}>Create a coin</Button>
        <Button variant="secondary">Connect wallet</Button>
      </div>
    </div>
  );
};
