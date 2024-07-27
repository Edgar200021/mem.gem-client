import { cn } from "../../lib/cn";

import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import cameraIcon from "../../assets/icons/camera.svg";
import { CreateToken } from "../CreateToken/CreateToken";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
interface Props {
  className?: string;
}

export const CreateTokenForm = ({ className }: Props) => {
  const [imgUrl, setImgUrl] = useState("");
  const [data, setData] = useState<undefined | Record<string, string>>(
    undefined
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!imgUrl) return;

    return () => URL.revokeObjectURL(imgUrl);
  }, []);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (imgUrl) {
      URL.revokeObjectURL(imgUrl);
    }

    setImgUrl(URL.createObjectURL(file));
  };

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const obj = Object.fromEntries(Object.entries(formData));

    setData(obj);
  }, []);

  return (
    <>
      <form onSubmit={onSubmit} className={cn("", className)}>
        <fieldset className="p-0 b-0 m-0 box">
          <div className="size-[90px] relative overflow-hidden rounded-full border-[1px] border-gray-100 mx-auto mb-5">
            <img
              width={20}
              height={18}
              src={cameraIcon}
              alt="camera"
              className="absolute inset-[50%] -translate-x-[50%] -translate-y-[50%]"
            />
            <Button
              type="button"
              onClick={() => inputRef.current?.click()}
              variant="clear"
              className=" absolute inset-0 w-full h-full"
            ></Button>
            {imgUrl && (
              <img
                className="w-full h-full object-cover"
                src={imgUrl}
                alt="img"
              />
            )}
          </div>
          <input
            onChange={onFileChange}
            ref={inputRef}
            className="hidden"
            type="file"
            accept="image/*"
          />

          <div className="flex flex-col gap-y-3 mb-6">
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-[10px] text-gray-100">Name</span>
              <Input name="name" required />
            </div>
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-[10px] text-gray-100">Ticker</span>
              <Input name="ticker" required />
            </div>
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-[10px] text-gray-100">Description</span>
              <Input name="description" required />
            </div>
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-[10px] text-gray-100">
                Tons for initial buy
              </span>
              <Input name="tons" required type="number" defaultValue={5} />
            </div>
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-[10px] text-gray-100">
                Telegramm chanel link (optional)
              </span>
              <Input name="telegram_chanel" />
            </div>
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-[10px] text-gray-100">
                Telegramm chat link (optional)
              </span>
              <Input name="telegram_chat" />
            </div>
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-[10px] text-gray-100">
                Twitter link (optional)
              </span>
              <Input name="twitter_link" />
            </div>
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-[10px] text-gray-100">
                Website link (optional)
              </span>
              <Input name="wesite_link" />
            </div>
          </div>

          <Button className="!max-w-full">Continue</Button>
        </fieldset>
      </form>
      <>{data !== undefined && <CreateToken isOpened={data !== undefined} />}</>
    </>
  );
};
