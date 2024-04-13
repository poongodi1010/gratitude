/* eslint-disable react/prop-types */
import Modal from "../../ui/Modal";

import Menus from "../../ui/Menus";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import CreateToDoList from "./CreateToDoList";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEditToDoStatus } from "./useEditToDoStatus";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteToDo } from "./useDeleteToDo";

function ToDoRow({ list }) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const { isEditing, editStatus } = useEditToDoStatus();
  const { isDeleting, deleteToDo } = useDeleteToDo();
  const id = list.id;

  return (
    <div
      className={`mt-8 grid grid-cols-7 justify-center text-2xl capitalize text-black sm:text-xl ${checked && "line-through"}`}
    >
      <div className="text-center">
        <label htmlFor="checkbox"></label>
        <input
          type="checkbox"
          id="checkbox"
          disabled={isEditing}
          value={checked}
          onChange={() => {
            setChecked((c) => !c);
            if (list.status === "in-progress") {
              editStatus({
                newStatus: { ...list, status: "done" },
                id: list.id,
              });
            }
          }}
        />
      </div>
      <div className="text-center">
        <h2>{list.tasks}</h2>
      </div>
      <div className="text-center">
        <h2>{list.deadline}</h2>
      </div>
      <div className="text-center">
        <h2>{list.priority}</h2>
      </div>
      <div className="text-center">
        <h2>{list.status}</h2>
      </div>
      <div className="text-center">
        <h2>{list.date}</h2>
      </div>
      <div className="flex justify-center">
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
              <CreateToDoList toDoToEdit={list} />
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

export default ToDoRow;
