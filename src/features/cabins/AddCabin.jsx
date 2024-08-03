import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
    // <div>
    //   <Button onClick={() => setIsOpenModal((show) => !show)}>
    //     Add new Cabin
    //   </Button>

    //   {isOpenModal && <Modal onClose={() => setIsOpenModal(false)} />}
    // </div>
  );
}

export default AddCabin;
