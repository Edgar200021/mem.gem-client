import { cn } from "../../lib/cn";

interface Props {
  className?: string;
  text: string;
}

export const Discription = ({ className, text }: Props) => {
  return (
    <div className={cn("p-5 rounded-xl bg-gray-200", className)}>
      <div className="flex flex-col gap-y-[2px]">
        <span className="text-[10px] tracking-tight text-gray-100 capitalize">
          Discription
        </span>
        <p className="tracking-tight text-sm">{text}</p>
      </div>
    </div>
  );
};
