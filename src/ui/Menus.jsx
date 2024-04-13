/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

const MenusContext = createContext();
function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);
  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();

    let x = window.innerWidth - rect.width - rect.x;
    let y = rect.y + rect.height + 8;

    setPosition({
      x: x,
      y: y,
    });

    openId === "" || openId !== id ? open(id) : close();
  }
  return (
    <button
      onClick={handleClick}
      className="translate-x-3.5 rounded-md p-[0.4rem] transition-all  duration-200 max-[767px]:py-0"
    >
      <HiEllipsisVertical className="h-[1.6rem] w-[1.6rem] text-gray-900  transition-all duration-500" />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close);
  if (openId !== id) return null;

  return createPortal(
    <ul
      className="fixed rounded-lg  bg-gray-100 text-black"
      style={{ right: position.x, top: position.y }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body,
  );
}
function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <button
        onClick={handleClick}
        className="flex w-full items-center gap-[1.6rem] border-0  px-2 py-4 text-left  text-xl transition-none duration-75 hover:bg-[#43766C] hover:text-white "
      >
        {icon}
        <span>{children} </span>
      </button>
    </li>
  );
}

Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
