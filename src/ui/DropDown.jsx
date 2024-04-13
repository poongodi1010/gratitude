import { useNavigate } from "react-router-dom";
import Logout from "../features/authendication/Logout";

/* eslint-disable react/prop-types */
function DropDown({ isVisible }) {
  const navigate = useNavigate();

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
