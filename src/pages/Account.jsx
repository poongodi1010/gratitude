import UserUpdate from "../features/authendication/UserUpdate";
import { HiOutlineUser } from "react-icons/hi2";

function Account() {
  return (
    <>
      <HiOutlineUser className="rounded-full bg-gray-200 p-4 text-black " />
      <div className="   grid px-20 ">
        <UserUpdate />
      </div>
    </>
  );
}
export default Account;
