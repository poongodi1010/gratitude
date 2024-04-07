// import styled from "styled-components";
// import Logout from "../features/authentication/Logout";
// import HeaderMenu from "./HeaderMenu";
// import UserAvatar from "../features/authentication/UserAvatar";

//import UserAvatar from "../features/authendication/UserAvatar";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import SideBar from "./SideBar";

//import DropDown from "./DropDown";

// const StyledHeader = styled.header`
//   background-color: var(--color-grey-0);
//   padding: 1.2rem 4.8rem;
//   border-bottom: 1px solid var(--color-grey-100);
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   gap: 2.4rem;
// `;

function Header() {
  const [isVisible, setIsVisisble] = useState(false);

  // function handleVisible() {
  //   setIsVisisble((v) => !v);
  // }

  return (
    <>
      {/* // <header className=" border-b-2 border-b-black bg-[url(`/cherry.jpg`)] bg-cover  px-[4.8rem] max-[424px]:p-0  sm:gap-[0.1rem] sm:px-0 sm:py-4 lg:flex lg:h-[110px] lg:items-center lg:gap-[0.4rem] lg:overflow-hidden  "> */}
      <header className=" overflox-x-scroll flex h-[110px] items-center gap-[0.4rem] border-b-2 border-b-black bg-[url('/cherry.jpg')] bg-cover px-[4.8rem] lg:overflow-hidden  ">
        {/* <UserAvatar /> */}
        <SideBar />
        <HeaderMenu setIsVisisble={setIsVisisble} isVisible={isVisible} />
        {/* <DropDown isVisible={isVisible} setIsVisisble={setIsVisisble} /> */}
        {/* <UserAvatar />
      <HeaderMenu /> */}
      </header>
    </>
  );
}

export default Header;
