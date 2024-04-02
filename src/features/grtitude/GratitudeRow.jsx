/* eslint-disable react/prop-types */

//import { useState } from "react";
import CreateGratitudeEntry from "./CreateGratitudeEntry";
import { useDeleteGratitude } from "./useDeleteGratitude";
import { FormattedCreatedDate } from "../../utils/helpers";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import { useState } from "react";
//import { FormattedDate } from "../../utils/helpers";

function GratitudeRow({ grat }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isDeleting, deleteGratitude } = useDeleteGratitude();
  //const [editSession, setEditSession] = useState(false);
  // todayDate = FormattedDate();
  const arrayOfContent = grat.gratitude.trim().split(/\s+/);
  let date = FormattedCreatedDate(grat.created_at);
  let modified_date = FormattedCreatedDate(grat.modified_date);

  // eslint-disable-next-line react/prop-types
  return (
    // eslint-disable-next-line react/prop-types

    <div className="box-border rounded-lg border-2 border-b-2 border-green-100 border-b-gray-300 bg-green-100 px-6 pb-4 pt-2 text-2xl font-medium">
      <p className="py-2 font-sans">{modified_date ? modified_date : date}</p>
      <div className="  flex h-full w-11/12 justify-between  font-sans text-2xl font-medium">
        <p className="w-3/4 whitespace-pre-line">
          <span>
            {isExpanded
              ? grat.gratitude
              : grat.gratitude.split(" ").slice(0, 15).join(" ")}
          </span>
          <button
            onClick={() => setIsExpanded((exp) => !exp)}
            className="ml-4 rounded border-2  text-[#43766C] "
          >
            {arrayOfContent.length > 14
              ? isExpanded
                ? "show less "
                : "... "
              : ""}
          </button>
          {/* {grat.gratitude} */}
        </p>
        <div className="flex justify-between">
          <Modal>
            <Menus className="flex items-center justify-end">
              <Menus.Toggle id={grat.id} />
              <Menus.List id={grat.id}>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>
                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="edit">
                {/* //{editSession && <CreateGratitudeEntry gratitudeToEdit={grat} />} */}
                <CreateGratitudeEntry gratitudeToEdit={grat} />
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="gratitude entry"
                  onConfirm={() => deleteGratitude(grat.id)}
                  disabled={isDeleting}
                />
              </Modal.Window>
            </Menus>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default GratitudeRow;
