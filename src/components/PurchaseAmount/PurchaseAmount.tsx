import { ChangeEvent, useRef, useState } from "react";

interface Props {
  className?: string;
}
export const PurchaseAmount = ({ className }: Props) => {
  const [amount, setAmount] = useState("1");
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    inputRef.current!.style.width = (e.target.value.length + 1) * 10 + "px";
  };

  return (
    <div className={className}>
      <span className="block text-gray-50 tracking-tight mb-6">
        Amount of purchase
      </span>
      <label className="p-3 mb-3 rounded-[10px] bg-gray-200 border-[1px] border-gray-150 flex gap-1 justify-start items-center">
        <input
          ref={inputRef}
          className="bg-transparent outline-none w-4 max-w-24 font-semibold text-xl "
          min={1}
          type="number"
          value={amount}
          onChange={onChange}
        />
        <span className="text-xl font-semibold uppercase tracking-tight">
          ton
        </span>
        <span className="text-gray-50 uppercase tracking-tight ml-auto">
          0.00007382 $duck
        </span>
      </label>

      <div className="flex items-center gap-x-[10px]">
        <label className="py-1 px-2 rounded-xl cursor-pointer border-gray-150 border-[1px] text-xl uppercase tracking-tight">
          <input
            onChange={onChange}
            className="hidden"
            type="radio"
            value={3}
            name="amount"
          />
          3 ton
        </label>
        <label className="py-1 px-2 rounded-xl cursor-pointer border-gray-150 border-[1px] text-xl uppercase tracking-tight">
          <input
            onChange={onChange}
            className="hidden"
            type="radio"
            value={5}
            name="amount"
          />
          5 ton
        </label>
        <label className="py-1 px-2 rounded-xl cursor-pointer border-gray-150 border-[1px] text-xl uppercase tracking-tight">
          <input
            onChange={onChange}
            className="hidden"
            type="radio"
            value={10}
            name="amount"
          />
          10 ton
        </label>
      </div>
    </div>
  );
};
