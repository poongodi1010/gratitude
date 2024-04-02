//import { HiArrowRightOnRectangle } from "react-icons/hi2";
//import ButtonIcon from "../../ui/ButtonIcon";
import useLogout from "./useLogout";
//mport SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <button disabled={isLoading} onClick={logout}>
      {/* {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />} */}
      {/* <HiArrowRightOnRectangle /> */}
      Logout
    </button>
  );
}

export default Logout;
//
