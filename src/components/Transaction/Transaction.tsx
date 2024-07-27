import { cn } from "../../lib/cn";

interface Props {
  className?: string;
}

export const Transaction = ({ className }: Props) => {
  return (
    <div className={cn("flex items-center gap-x-1 justify-start", className)}>
      <div className="size-10 rounded-full overflow-hidden">
        <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
      </div>
      <div className="flex flex-col  ">
        <span className="font-semibold uppercase tracking-tight leading-[18px]">
          donald trump
        </span>
        <span className="text-green text-xs tracking-tight">Buy 13m ago </span>
      </div>
      <div className="ml-auto flex flex-col ">
        <span className="font-semibold uppercase tracking-tight leading-[18px]">16.83ton</span>
        <span className="text-xs uppercase tracking-tight text-gray-50">
          78907073 $DUCK
        </span>
      </div>
    </div>
  );
};
