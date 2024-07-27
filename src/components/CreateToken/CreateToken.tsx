import { MODAL_NAMES } from "../../const/modal";
import { Characteristics } from "../Characteristics/Characteristics";
import { Modal } from "../Modal/Modal";
import { Button } from "../ui/Button";

interface Props {
  isOpened: boolean;
}

export const CreateToken = ({ isOpened = false }: Props) => {
  return (
    <Modal>
      <Modal.Content
        isOpened={isOpened}
        className="pt-2"
        name={MODAL_NAMES.CREATE_TOKEN}
        renderContent={(closeModal) => (
          <div className="w-full">
            <span className="block text-center mb-5 text-sm uppercase font-semibold ">
              Operation info
            </span>
            <div className="flex flex-col gap-y-2 mb-5">
              <Characteristics
                className="[&>table]:bg-transparent"
                variant="sm"
                data={{
                  Name: "Duck",
                  Ticker: "$DCK",
                  "Total supply": "1.000.000.000",
                  Comission: "0.02 TON",
                  "I will recieve": "5 $DCK",
                }}
              />
            </div>
            <Button className="!max-w-full">Create a token</Button>
          </div>
        )}
      />
    </Modal>
  );
};
