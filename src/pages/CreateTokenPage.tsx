import { CreateTokenSlides } from "../components/CreateTokenSlides/CreateTokenSlides";
import { cn } from "../lib/cn";

interface Props {
  className?: string;
}

export const CreateTokenPage = ({ className }: Props) => {
  return (
    <main className={cn("py-5", className)}>
      <CreateTokenSlides />
    </main>
  );
};
