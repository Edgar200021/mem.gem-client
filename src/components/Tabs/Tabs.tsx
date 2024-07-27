import { ReactNode, useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "../../lib/cn";
import { Button } from "../ui/Button";

interface Props {
  className?: string;
  content: { title: string; content: ReactNode; to?: string }[];
}

export const Tabs = ({ className, content }: Props) => {
  const [activeTab, setActiveTab] = useState(content[0].title);
  const { pathname } = useLocation();



  return (
    <div
      className={cn(
        className,
        "flex flex-col gap-y-[26px] py-[14px] px-[22px] rounded-[12px]"
      )}
    >
      <div className="flex w-full p-[1.5px] border-gray-150 border-[1px] rounded-lg">
        {content.map(({ title, to }) => {
          if (to !== undefined) {
            return (
              <Button
                key={title}
                to={to}
                variant="secondary"
                className={cn(
                  "!py-1 !px-[30px]! !bg-transparent !rounded-[7px] transition-colors duration-300 ease !max-w-full w-full  ",
                  {
                    "!bg-gray-100": pathname.includes(to),
                  }
                )}
              >
                {title}
              </Button>
            );
          }

          return (
            <Button
              onClick={setActiveTab.bind(null, title)}
              key={title}
              variant="secondary"
              className={cn(
                "!py-1 !px-[30px] !bg-transparent !rounded-[7px] transition-colors duration-300 ease !max-w-full w-full",
                {
                  "!bg-gray-100": activeTab === title,
                }
              )}
            >
              {title}
            </Button>
          );
        })}
      </div>

      {content.find((c) => c.title === activeTab)?.content }
    </div>
  );
};
