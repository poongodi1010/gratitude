/* eslint-disable react/prop-types */

//import { useState } from "react";
import CreateGratitudeEntry from "./CreateGratitudeEntry";
import { useDeleteGratitude } from "./useDeleteGratitude";
import { FormattedCreatedDate } from "../../utils/helpers";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
//import { FormattedDate } from "../../utils/helpers";
// eslint-disable-next-line react/prop-types
function GratitudeRow({ grat }) {
  const { isDeleting, deleteGratitude } = useDeleteGratitude();
  //const [editSession, setEditSession] = useState(false);
  // todayDate = FormattedDate();
  let date = FormattedCreatedDate(grat.created_at);
  let modified_date = FormattedCreatedDate(grat.modified_date);

  // function handleClick() {
  //   setEditSession((edit) => !edit);
  // }

  //onst createdDate = grat.created_at;
  // eslint-disable-next-line react/prop-types
  return (
    // eslint-disable-next-line react/prop-types

    <div className="box-border rounded-lg border-2 border-b-2 border-green-100 border-b-gray-600 bg-green-100 p-6 text-2xl font-medium">
      <p className="py-4 font-sans">{modified_date ? modified_date : date}</p>
      <div className="  flex h-full w-11/12 justify-between  font-sans text-2xl font-medium">
        <p className="w-3/4">{grat.gratitude}</p>
        <div className="flex justify-between">
          <Modal>
            <Modal.Open opens="edit">
              <button>
                <HiPencil />
              </button>
            </Modal.Open>
            <Modal.Window name="edit">
              {/* //{editSession && <CreateGratitudeEntry gratitudeToEdit={grat} />} */}
              <CreateGratitudeEntry gratitudeToEdit={grat} />
            </Modal.Window>
          </Modal>
          <Modal>
            <Modal.Open opens="delete">
              <button>
                <HiTrash />
              </button>
            </Modal.Open>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="gratitude entry"
                onConfirm={() => deleteGratitude(grat.id)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Modal>
          <Menus className="flex items-center justify-end">
            <Menus.Toggle id={grat.id} />
            <Menus.List id={grat.id}>
              <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Menus.List>
          </Menus>
        </div>
      </div>
    </div>
  );
}

export default GratitudeRow;
