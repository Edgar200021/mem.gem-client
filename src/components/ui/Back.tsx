import { useNavigate } from "react-router-dom";
import iconBack from "../../assets/icons/back.svg";
import { cn } from "../../lib/cn";
import { Button } from "./Button";

interface Props {
  className?: string;
}

export const Back = ({ className }: Props) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(-1)}
      variant="clear"
      className={cn("size-4", className)}
    >
      <img className="w-full h-full" src={iconBack} alt="back" />
    </Button>
  );
};
