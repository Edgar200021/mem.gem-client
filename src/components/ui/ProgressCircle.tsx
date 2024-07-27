import { cn } from "../../lib/cn";

interface Props {
  className?: string;
  percentage: number;
}

export const ProgressCircle = ({ className, percentage }: Props) => {
  const finalValue = `calc(251.2px - (251.2px * ${percentage}) / 100)`;

  return (
    <div className={cn(className, "relative w-10 h-10 ml-auto")}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-200 stroke-gray-100"
          strokeWidth="1"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        <circle
          className="text-indigo-500  progress-ring__circle stroke-[#A4CA8D]"
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDasharray="251.2"
          strokeDashoffset={finalValue}
        ></circle>
      </svg>
      <span className="text-[10px] tracking-[-0.03em] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        {percentage}%
      </span>
    </div>
  );
};
