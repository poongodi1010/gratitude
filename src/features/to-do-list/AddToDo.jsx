import Modal from "../../ui/Modal";
import CreateToDoList from "./CreateToDoList";

function AddToDo() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="todo-form">
          <button className=" my-6 grid w-full items-center rounded-xl  bg-[#43766C]  px-4 py-6 text-white max-[424px]:w-full max-[424px]:px-[0.5rem] max-[424px]:text-sm sm:w-fit sm:px-4 sm:py-6 sm:text-xl">
            Add ToDo Task
          </button>
        </Modal.Open>
        <Modal.Window name="todo-form">
          <CreateToDoList />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddToDo;
