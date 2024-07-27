import {
  FacebookIcon,
  FacebookShareButton,
  OKIcon,
  OKShareButton,
  RedditIcon,
  RedditShareButton,
} from "react-share";

import { cn } from "../../lib/cn";
import { Button } from "../ui/Button";

import { useState } from "react";
import shareIcon from "../../assets/icons/share.svg";

interface Props {
  className?: string;
  url: string;
}

export const ShareToken = ({ className, url }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={cn(
        "p-[14px] flex items-center justify-between gap-x-5 bg-gray-200 rounded-xl relative",
        className
      )}
    >
      <span className="text-gray-50">{url}</span>
      <Button
        onClick={() => setShow((prev) => !prev)}
        className="size-5 relative"
        variant="clear"
      >
        <img src={shareIcon} alt="share" />
      </Button>
      <div
        className={cn(
          " gap-x-2 flex-wrap rounded-xl p-2 hidden absolute right-10 top-5 bg-white",
          {
            flex: show,
          }
        )}
      >
        <FacebookShareButton url={url}>
          <FacebookIcon size={20} round />
        </FacebookShareButton>
        <OKShareButton url={url}>
          <OKIcon size={20} round />
        </OKShareButton>
        <RedditShareButton url={url}>
          <RedditIcon size={20} round />
        </RedditShareButton>
      </div>
    </div>
  );
};
