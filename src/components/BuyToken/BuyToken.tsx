import { MODAL_NAMES } from "../../const/modal";
import { Characteristics } from "../Characteristics/Characteristics";
import { Modal } from "../Modal/Modal";
import { Button } from "../ui/Button";

export const BuyToken = () => {
  return (
    <Modal>
      <Modal.Open
        renderTrigger={(openModal) => (
          <Button onClick={openModal} className="!max-w-full">
            Buy
          </Button>
        )}
        name={MODAL_NAMES.BUY_TOKEN}
      />
      <Modal.Content
        className="pt-2"
        name={MODAL_NAMES.BUY_TOKEN}
        renderContent={(closeModal) => (
          <div className="w-full">
            <span className="block text-center mb-5 text-sm">Confirm purchase</span>
            <div className="flex flex-col gap-y-2 mb-5">
              <Characteristics variant="xs"
                data={{ Name: "Trump's victory", Ticker: "$TRR" }}
              />
              <Characteristics variant="xs"
                data={{
                  "SEND TON": "1.00",
                  "Receive $TTR": "5,921,771.51",
                  "Share of the supply": "0.59%",
                }}
              />
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <span className="text-[10px] text-gray-100">Transaction fee: 0.1 TON</span>
              <Button className="!max-w-full">Confirm</Button>
            </div>
          </div>
        )}
      />
    </Modal>
  );
};
