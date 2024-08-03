import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
    // <div>
    //   <Button onClick={() => setIsOpenModal((show) => !show)}>
    //     Add new Cabin
    //   </Button>

    //   {isOpenModal && <Modal onClose={() => setIsOpenModal(false)} />}
    // </div>
  );
}

export default AddCabin;
