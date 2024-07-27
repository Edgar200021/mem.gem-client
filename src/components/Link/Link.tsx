import chatIcon from "../../assets/icons/chat.svg";
import telegramIcon from "../../assets/icons/telegram.svg";
import { cn } from "../../lib/cn";

const variants = {
  channel: { icon: telegramIcon, label: "Telegram channel" },
  chat: { icon: chatIcon, label: "Telegram chat" },
};

interface Props {
  className?: string;
  variant: keyof typeof variants;
}

export const Link = ({ className, variant }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-1 items-center max-w-40 w-full",
        className
      )}
    >
      <div className="py-3 px-5 rounded-xl bg-gray-200 flex items-center justify-center w-full">
        <img src={variants[variant].icon} alt="icon" width={20} height={20} />
      </div>
      <span className="text-sm tracking-tight">{variants[variant].label}</span>
    </div>
  );
};
