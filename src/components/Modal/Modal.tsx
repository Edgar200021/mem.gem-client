import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import closeIcon from "../../assets/icons/close.svg";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { cn } from "../../lib/cn";
import { Button } from "../ui/Button";

interface ModalContext {
  modalName: string;
  setModalName: React.Dispatch<React.SetStateAction<string>>;
}

const modalContext = createContext<ModalContext | null>(null);

interface Props {
  children: ReactNode;
}

export const Modal = ({ children }: Props) => {
  const [modalName, setModalName] = useState("");

  return (
    <modalContext.Provider value={{ modalName, setModalName }}>
      {children}
    </modalContext.Provider>
  );
};

interface OpenProps {
  name: string;
  renderTrigger: (fn: () => void) => ReactElement;
}

const Open = ({ name, renderTrigger }: OpenProps) => {
  const { setModalName } = useModal();

  const openModal = () => {
    setModalName(name);
  };

  return renderTrigger(openModal);
};

interface ContentProps {
  name: string;
  renderContent: (fn: () => void) => ReactElement;
  isOpened?: boolean;
  className?: string;
}

const Content = ({
  name,
  renderContent,
  isOpened,
  className,
}: ContentProps) => {
  const { setModalName, modalName } = useModal();

  const closeModal = () => {
    setModalName("");
  };

  useEffect(() => {
    if (isOpened === undefined) return;

    setModalName(isOpened ? name : "");
  }, [isOpened]);

  return (
    <Dialog
      open={modalName === name}
      onClose={closeModal}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0  transition-opacity  bg-black/20  data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className={cn(
              "relative transform overflow-hidden rounded-lg bg-[#1c1c1e] px-4 pb-4 pt-8 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-full max-w-[400px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
              className
            )}
          >
            <Button
              id="modal-close"
              onClick={closeModal}
              variant="clear"
              className="size-3 absolute right-[6px] top-[6px] w-6 h-6  rounded-full flex items-center justify-center bg-[#3c3c3e]"
            >
              <img width={12} height={12} src={closeIcon} alt="close" />
            </Button>
            {renderContent(closeModal)}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );

  return renderContent(closeModal);
};

function useModal() {
  const context = useContext(modalContext);
  if (!context) throw new Error("useModal must be used within a ModalProvider");

  return context;
}

Modal.Open = Open;
Modal.Content = Content;
