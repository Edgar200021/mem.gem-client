import { cn } from "../../lib/cn";
import { Back } from "../ui/Back";
import { Button } from "../ui/Button";

import { useLocation } from "react-router-dom";
import closeIcon from "../../assets/icons/close.svg";
import dotsIcon from "../../assets/icons/dots.svg";
import { HEADER_TEXT } from "../../const/header";
import { PATHS } from "../../const/route";

interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  const { pathname } = useLocation();

  const showBack = pathname !== PATHS.MAIN;

  return (
    <header className={cn("", className)}>
      <div className="box">
        <div className="flex items-center gap-x-5 justify-between w-full">
          <div className="flex items-center gap-x-4">
            {showBack && <Back />}
            <span className="font-semibold text-xl uppercase tracking-tight">
              {HEADER_TEXT[pathname]}
            </span>
          </div>
          <div className="flex items-center gap-x-4">
            <Button variant="clear" className="w-[3px] h-[15px]">
              <img className="w-full h-full" src={dotsIcon} alt="dots" />
            </Button>

            <Button className="h-[14px] w-[14px]" variant="clear">
              <img className="w-full h-full" src={closeIcon} alt="close" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
