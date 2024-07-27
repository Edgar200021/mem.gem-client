import { useState } from "react";

import { CreateTokenSlide } from "../CreateTokenSlide/CreateTokenSlide";
import { CreateTokenForm } from "../forms/CreateTokenForm";

interface Props {
  className?: string;
}

export const CreateTokenSlides = () => {
  const [slide, setSlide] = useState(1);

  const onClick = (num: number) => setSlide(num);
  return (
    <div>
      {slide === 1 && (
        <CreateTokenSlide variant="continue" onClick={onClick.bind(null, 2)} />
      )}

      {slide === 2 && (
        <CreateTokenSlide variant="go" onClick={onClick.bind(null, 3)} />
      )}

      {slide === 3 && <CreateTokenForm />}
    </div>
  );
};
