//import UserAvatar from "../features/authendication/UserAvatar";
import UserUpdate from "../features/authendication/UserUpdate";
//import UserProvider from "../features/authendication/UserContext";
//import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";

function Account() {
  //const navigate = useNavigate();

  return (
    <>
      {/* //<button className="mx-2 rounded-full border-none bg-gray-200 p-[1.5rem]"> */}
      <HiOutlineUser className="rounded-full bg-gray-200 p-4 text-black " />
      {/* </button> */}
      <div className="   grid px-20 ">
        {/* <UserAvatar /> */}

        <UserUpdate />
      </div>
    </>
  );
}
export default Account;
