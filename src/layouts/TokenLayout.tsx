import { Outlet } from "react-router-dom";

import { Tabs } from "../components/Tabs/Tabs";
import { TokenDetails } from "../components/TokenDetails/TokenDetails";
import { TOKEN_FURTHER_DATA } from "../const/token";
import { cn } from "../lib/cn";

interface Props {
  className?: string;
}

export const TokenLayout = ({ className }: Props) => {
  return (
    <div className={cn(className, "flex flex-col gap-y-3  ")}>
      <div className="box flex flex-col gap-y-3 w-full ">
        <TokenDetails {...TOKEN_FURTHER_DATA[1]} />

        <Tabs
          className="!px-0"
          content={[
            { title: "Trade info", content: null, to: "/token/trade" },
            { title: "About token", content: null, to: "/token/about" },
          ]}
        />
      </div>

      <Outlet />
    </div>
  );
};
