import { cn } from "../../lib/cn";

interface Props {
  className?: string;
  percentage: number;
}

export const Progress = ({ className, percentage }: Props) => {
  console.log(percentage)
  return (
    <div
      className={cn(
        "w-full rounded-full h-2.5 relative overflow-hidden",
        className
      )}
    >
      <span className="block absolute top-0 left-0 w-full h-full opacity-50 bg-progress-green"></span>

      <div
        className="bg-progress-green absolute left-0 top-0 w-full h-full -opacity-40 rounded-full"
        style={{
          width: `${percentage}%`,
        }}
      ></div>
    </div>
  );
};
