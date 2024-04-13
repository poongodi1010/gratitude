import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

/* eslint-disable react/prop-types */

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}
function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  // const ref = useOutsideClick(close);
  //ref is to get to know whether we clicked outside or inside of modal window.
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [close],
  );

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-[1000] h-screen w-full backdrop-blur-sm transition-all  duration-500 max-[767px]:top-[100px]">
      <div
        ref={ref}
        className="fixed left-[50%] top-[40%]  w-4/5 -translate-x-[50%] -translate-y-[50%]  bg-blue-200  p-4 transition-all duration-500    max-[767px]:w-3/4 "
      >
        <button
          onClick={close}
          className="absolute left-[1040px] flex  rounded-xl p-4 !outline-none"
        >
          X
        </button>
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>,
    document.body,
  );
}
Modal.Open = Open;
Modal.Window = Window;
export default Modal;
