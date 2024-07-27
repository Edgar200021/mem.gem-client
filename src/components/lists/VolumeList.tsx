import { cn } from "../../lib/cn";
import { Volume } from "../ui/Volume";

interface Props {
  className?: string;
}

export const VolumeList = ({ className }: Props) => {
  return (
    <ul className={cn("flex flex-col gap-y-3 rounded-xl p-5 bg-gray-200", className)}>
      <li className="flex flex-col gap-y-1">
        <Volume percentage={20} />
        <div className="flex items-center justify-between text-sm ">
          <span className="tracking-tight text-green">67 buys</span>
          <span className="tracking-tigght text-red">11 sells</span>
        </div>
      </li>
      <li className="flex flex-col gap-y-1">
        <Volume percentage={10} />
        <div className="flex items-center justify-between text-sm ">
          <span className="tracking-tight text-green">5.3k$ bought</span>
          <span className="tracking-tigght text-red">458.3k$ sold</span>
        </div>
      </li>
    </ul>
  );
};
