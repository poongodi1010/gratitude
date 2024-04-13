/* eslint-disable react/prop-types */
import Modal from "../../ui/Modal";

import Menus from "../../ui/Menus";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import CreateToDoListForSmall from "./CreateToDoListForSmall";
import { useNavigate } from "react-router-dom";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteToDo } from "./useDeleteToDo";

function ToDoRowForSmall({ list }) {
  const navigate = useNavigate();
  const { isDeleting, deleteToDo } = useDeleteToDo();
  const id = list.id;

  return (
    <div
      className={`mt-4 grid grid-cols-[6.5fr_5fr_4fr_4fr_1fr] justify-center px-4 text-[0.9rem] capitalize text-black `}
    >
      <div className="mx-2">
        <h2>{list.tasks}</h2>
      </div>
      <div>
        <h2>{list.deadline}</h2>
      </div>
      <div className=" text-center">
        <h2>{list.priority}</h2>
      </div>
      <div className=" text-center">
        <h2>{list.status}</h2>
      </div>
      <div className="hidden text-center">
        <h2>{list.date}</h2>
      </div>
      <div className="flex  justify-center">
        <Modal>
          <Menus className="flex justify-end">
            <Menus.Toggle id={id} />
            <Menus.List id={id}>
              <Menus.Button
                icon={<HiEye />}
                onClick={() => navigate(`/todolist/${id}`)}
              >
                See Details
              </Menus.Button>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateToDoListForSmall toDoToEdit={list} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="ToDo entry"
                onConfirm={() => deleteToDo(id)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Menus>
        </Modal>
      </div>
    </div>
  );
}

export default ToDoRowForSmall;
