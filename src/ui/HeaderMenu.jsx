import { useNavigate } from "react-router-dom";
import { useUsers } from "../features/authendication/useUsers";
import Logout from "../features/authendication/Logout";
import { useEffect, useRef } from "react";
/* eslint-disable react/prop-types */
function HeaderMenu({ setIsVisisble, isVisible }) {
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
      className=" absolute right-[100px] font-[PT-serif] text-3xl font-bold max-[767px]:right-[10px] "
      ref={ref}
    >
      <button
        className=" relative mx-4  h-full w-full cursor-pointer pr-3.5 text-left font-[PT-serif] text-3xl font-bold text-red-800 !outline-none transition-all duration-300 hover:text-yellow-600  focus:text-yellow-800 max-[767px]:h-full max-[767px]:w-full max-[767px]:text-[1.7rem]  [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
        onClick={() => setIsVisisble((v) => !v)}
      >
        {name}
      </button>
      {isVisible ? (
        <ul className="absolute right-[3px] top-[57px] z-50 my-4 rounded-xl bg-[#43766C] p-4 px-8 text-center text-white max-[767px]:right-[15px] max-[767px]:top-[50px] max-[767px]:text-[1.2rem] max-[374px]:top-[40px]">
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
    </div>
  );
}

export default HeaderMenu;
