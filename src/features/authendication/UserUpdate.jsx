import UpdatePassword from "./UpdatePassword";
import UserDetails from "./UserDetails";
import { useUserToggle } from "./UserContext";

function UserUpdate() {
  const { passwordChange, updatePassword, userdetails } = useUserToggle();

  function handleUserDetails() {
    userdetails({
      passwordChange: false,
    });
  }
  function handleUpdatePassword() {
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
