import { cn } from "../../lib/cn";

interface Props {
  className?: string;
  percentage: number;
}

export const Volume = ({ className, percentage }: Props) => {
  return (
    <div
      className={cn(
        "w-full rounded-full h-2.5 relative overflow-hidden bg-progress-green",
        className
      )}
    >
      <div
        className="bg-progress-red absolute right-0 top-0 w-full h-full -opacity-40 rounded-full"
        style={{
          width: `${percentage}%`,
        }}
      ></div>
    </div>
  );
};
