/* eslint-disable react/prop-types */
import Modal from "../../ui/Modal";
import CreateToDoListForSmall from "./CreateToDoListForSmall";
import { HiMiniPlus } from "react-icons/hi2";

function AddToDoForSmall({ width }) {
  return (
    <div>
      <Modal width={width}>
        <Modal.Open opens="todo-form-small">
          <button className=" my-6 flex items-end justify-end rounded-2xl  bg-[#43766C]  px-8 py-[0.35rem] text-white ">
            <HiMiniPlus />
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
