import { useNavigate } from "react-router-dom";
import Logout from "../features/authendication/Logout";
//import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
function DropDown({ isVisible }) {
  const navigate = useNavigate();

  // const ref = useRef();

  // // useEffect(
  // //   function () {
  // //     function handleClick(e) {
  // //       if (ref.current && !ref.current.contains(e.target)) {
  // //         isVisible: false;
  // //       }
  // //       document.addEventListener("click", handleClick, true);

  // //       return () => document.removeEventListener("click", handleClick, true);
  // //     }
  // //   },
  // //   [isVisible],
  // // );
  // //   function handleClick() {
  // //     <Logout />;
  // //   }

  // useEffect(
  //   function () {
  //     function handleClick(e) {
  //       if (ref.current && !ref.current.contains(e.target)) {
  //         setIsVisisble(false);
  //       }
  //     }

  //     document.addEventListener("click", handleClick, true);

  //     return () => document.removeEventListener("click", handleClick, true);
  //   },
  //   [setIsVisisble],
  // );
  console.log("visible", isVisible);
  return (
    <div className="absolute right-[110px] top-[100px] z-50 my-4 rounded-md bg-pink-200 px-8">
      {isVisible ? (
        <ul className="p-4 text-center">
          <li
            className="cursor-pointer py-4"
            onClick={() => navigate("/account")}
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

export default DropDown;
