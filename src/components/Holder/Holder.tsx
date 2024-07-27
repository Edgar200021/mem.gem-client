import { cn } from "../../lib/cn";

interface Props {
  className?: string;
}

export const Holder = ({ className }: Props) => {
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
      <span className="font-semibold uppercase tracking-tight leading-[18px] ml-auto">
        99.9%
      </span>
    </div>
  );
};
