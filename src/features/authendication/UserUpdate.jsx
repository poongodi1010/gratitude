//import UpdatePassword from "../features/authendication/UpdatePassword";
//import useUserToggle from "../features/authendication/UserContext";
//import useUserToggle from "./UserContext";
import UpdatePassword from "./UpdatePassword";
import UserDetails from "./UserDetails";
//import { useContext } from "react";
import { useUserToggle } from "./UserContext";
//import { useSearchParams } from "react-router-dom";

function UserUpdate() {
  const { passwordChange, updatePassword, userdetails } = useUserToggle();

  // const [searchParams, setSearchParams] = useSearchParams();
  function handleUserDetails() {
    // setSearchParams.set("account");
    userdetails({
      passwordChange: false,
    });
  }
  function handleUpdatePassword() {
    // setSearchParams.set("changePassword");

    updatePassword({
      passwordChange: true,
    });
  }
  return (
    <>
      <div className="ml-[10rem] max-[767px]:ml-0 max-[767px]:flex max-[767px]:flex-row max-[767px]:gap-[2rem] ">
        <button
          className=" cursor-pointer py-8 pr-8 !outline-none max-[767px]:p-2 max-[767px]:text-[1.5rem]"
          value={passwordChange}
          onClick={handleUserDetails}
        >
          Account
        </button>
        <button
          className=" cursor-pointer py-8 pr-8 !outline-none  max-[767px]:p-2 max-[767px]:text-[1.5rem]"
          value={passwordChange}
          onClick={handleUpdatePassword}
        >
          {" "}
          Change Password
        </button>
      </div>
      {passwordChange ? <UpdatePassword /> : <UserDetails />}
    </>
  );
}
export default UserUpdate;
