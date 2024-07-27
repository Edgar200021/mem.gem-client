import { cn } from "../../lib/cn";
import { Button } from "../ui/Button";

import createTokenImg1 from "../../assets/icons/create-token-1.svg";

const variants = {
  continue: {
    img: createTokenImg1,
    title: "Сreate your own memecoin in 30 sec",
    description: "Just fulfill the fields on the screen and pay the fee",
    btnText: "Continue",
  },
  go: {
    img: createTokenImg1,
    title: "Lounch the token",
    description: "Lounch the token on guspump and wait for it to become famous",
    btnText: "Let’s go",
  },
};

interface Props {
  className?: string;
  onClick: () => void;
  variant: keyof typeof variants;
}

export const CreateTokenSlide = ({ className, onClick, variant }: Props) => {
  return (
    <div className={cn("", className)}>
      <div className="max-w-[450px] mx-auto w-full min-h-20 h-[278px] mb-[38.5px]">
        <img src={variants[variant].img} alt="create token" className="w-full h-full object-cover" />
      </div>
      <div className="box flex flex-col w-full gap-y-3 text-center">
        <h1 className="font-semibold text-xl uppercase tracking-tight">
          {variants[variant].title}
        </h1>
        <span className="tracking-tight">{variants[variant].description}</span>
        <Button onClick={onClick} className="!max-w-full">
          {variants[variant].btnText}
        </Button>
      </div>
    </div>
  );
};
