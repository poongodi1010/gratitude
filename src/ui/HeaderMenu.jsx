//import styled from "styled-components";
//import ButtonIcon from "./ButtonIcon";
//import Logout from "../features/authendication/Logout";
//import DarkmodeToggle from "./DarkmodeToggle";
//import { useNavigate } from "react-router-dom";

//import { HiOutlineUser } from "react-icons/hi2";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../features/authendication/useUsers";
import Logout from "../features/authendication/Logout";
//import { useState } from "react";
//import Modal from "./Modal";
//import Logout from "../features/authendication/Logout";
// const StyledHeaderMenu = styled.ul`
//   display: flex;
//   gap: 0.4rem;
// `;

/* eslint-disable react/prop-types */
function HeaderMenu({ setIsVisisble, isVisible }) {
  //const navigate = useNavigate();
  const { user } = useUsers();
  const name = user.user_metadata.fullName;
  const navigate = useNavigate();

  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setIsVisisble(false);
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [setIsVisisble],
  );

  function handleChange() {
    () => setIsVisisble((v) => !v);
  }
  return (
    <div
      className=" absolute right-[100px] font-[PT-serif] text-3xl font-bold "
      // className=" absolute right-[100px] font-[PT-serif] text-3xl font-bold max-[424px]:right-[10px]  sm:right-[30px] "
      ref={ref}
    >
      {/* <li>
        <button className="mx-2 rounded-full border-none bg-gray-200 p-[1.5rem]">
          <HiOutlineUser />
        </button>
      </li> */}

      <button
        className=" relative mx-4  h-full w-full cursor-pointer pr-3.5 text-left font-[PT-serif] text-3xl font-bold text-red-800 !outline-none transition-all  duration-300 hover:text-yellow-600 focus:text-yellow-800  [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
        onClick={() => setIsVisisble((v) => !v)}
      >
        {name}
      </button>
      {/* <div className="absolute right-[10px] top-[57px] z-50 my-4 rounded-xl bg-[#43766C] px-8 text-white"> */}
      {isVisible ? (
        <ul className="absolute right-[3px]  top-[57px] z-50 my-4 rounded-xl bg-[#43766C] p-4 px-8 text-center text-white">
          <li
            className="cursor-pointer py-4"
            onClick={() => navigate("/account")}
            onChange={handleChange}
          >
            Profile
          </li>
          <button className="cursor-pointer py-4">
            <Logout />
          </button>
        </ul>
      ) : null}
      {/* </div> */}

      {/* <li className="mx-2 p-[1.2rem]">
        <Logout />
      </li> */}
    </div>
  );
}

export default HeaderMenu;
