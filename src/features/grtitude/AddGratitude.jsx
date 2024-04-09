//import { useState } from "react";
//import CreateGratitudeEntry from "./CreateGratitudeEntry";
//import GratitudeRow from "./GratitudeTable";
import Modal from "../../ui/Modal";
import CreateGratitudeEntry from "./CreateGratitudeEntry";
//import { HiPencilSquare } from "react-icons/hi2";
//import { HiPencilAlt } from "react-icons/hi";
//import { useGratitudeMode } from "../../../context/DarkModeContext";

function AddGratitude() {
  return (
    <div>
      <div className="mb-1  grid w-full rounded-lg  bg-[url('/banner6.jpeg')] bg-cover px-2 py-6 max-[767px]:bg-[url('/bnner9.jpeg')] ">
        <pre className=" flex items-center justify-center text-center font-serif text-[#12372A] max-[767px]:text-[1.5rem] max-[767px]:text-black ">
          {`Acknowledging the good that\nyou already have in your life\nis the foundation for all abundance.!`}
        </pre>
        <p className="flex justify-center pt-4 font-serif text-lg ">
          -ECKHARTTOLLE
        </p>
      </div>
      {/* <Modal>
      <Modal.Open opens="grat-form">
        <button className=" mb-4 grid w-full items-center rounded-xl  border-2 bg-[#43766C] px-2 py-6 text-white">
          Write Gratitude
        </button>
        {/* <GratitudeRow /> *
      </Modal.Open>
      <Modal.Window name="grat-form">
        <CreateGratitudeEntry />
      </Modal.Window>
    </Modal> */}

      <Modal>
        <Modal.Open opens="grat-form">
          <button className=" mb-1 grid w-full items-center  rounded-xl   bg-[#43766C] px-2 py-6 text-white">
            Write Gratitute
          </button>
        </Modal.Open>
        <Modal.Window name="grat-form">
          <CreateGratitudeEntry />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddGratitude() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   // const { click, showForm } = useGratitudeMode();
//   // console.log(click, showForm);
//   // function hanldeClick() {
//   //   setClick((click) => !click);
//   //   console.log(click);
//   // }
//   return (
//     <>
//       <button
//         value={isOpenModal}
//         onClick={() => setIsOpenModal((modal) => !modal)}
//         className=" mb-4 grid w-full items-center rounded-xl  border-2 bg-[#43766C] px-2 py-6 text-white"
//       >
//         Write Gratitude
//       </button>
//       <GratitudeRow />
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateGratitudeEntry onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }

export default AddGratitude;
