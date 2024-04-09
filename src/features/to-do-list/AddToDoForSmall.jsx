/* eslint-disable react/prop-types */
import Modal from "../../ui/Modal";
import CreateToDoListForSmall from "./CreateToDoListForSmall";

function AddToDoForSmall({ width }) {
  return (
    <div>
      <Modal width={width}>
        <Modal.Open opens="todo-form-small">
          <button className=" my-6 flex items-end justify-end rounded-[50%]  bg-[#43766C]  px-8 py-6 text-white ">
            +
          </button>
        </Modal.Open>
        <Modal.Window name="todo-form-small">
          <CreateToDoListForSmall />
        </Modal.Window>
      </Modal>
    </div>
  );
}
export default AddToDoForSmall;
