import { createPortal } from "react-dom";

/* eslint-disable react/prop-types */
function Modal({ children, onClose }) {
  return createPortal(
    <div className="fixed left-0 top-0 z-[1000] h-screen w-full backdrop-blur-sm  transition-all duration-500">
      <div className="fixed left-[60%] top-[30%] w-4/5 translate-x-[-50%] translate-y-[-50%] p-16 transition-all duration-500">
        <button
          onClick={onClose}
          className="absolute left-[550px] right-[20px] pt-4 "
        >
          X
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
