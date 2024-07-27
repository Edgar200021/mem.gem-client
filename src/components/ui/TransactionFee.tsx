import waveIcon from "../../assets/icons/wave.svg";

interface Props {
  className?: string;
  fee: number;
  variant?: "vertical" | "horizontal";
}
export const TransactionFee = ({
  className,
  fee,
  variant = "horizontal",
}: Props) => {
  return (
    <div className={className}>
      <span className="block mb-1 text-gray-50 tracking-tight">
        Transaction fee
      </span>
      <div className="flex items-center gap-x-1">
        <img src={waveIcon} alt="wave" width={13} height={4} />
        <span className="tracking-tight uppercase">{fee}ton</span>
      </div>
    </div>
  );
};
