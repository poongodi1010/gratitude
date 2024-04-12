// import styled from "styled-components";
// import Logout from "../features/authentication/Logout";
// import HeaderMenu from "./HeaderMenu";
// import UserAvatar from "../features/authentication/UserAvatar";

//import UserAvatar from "../features/authendication/UserAvatar";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import SideBar from "./SideBar";
import { useEffect } from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";
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
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 

  return (
    <>
      {/* // <header className=" border-b-2 border-b-black bg-[url(`/cherry.jpg`)] bg-cover  px-[4.8rem] max-[424px]:p-0  sm:gap-[0.1rem] sm:px-0 sm:py-4 lg:flex lg:h-[110px] lg:items-center lg:gap-[0.4rem] lg:overflow-hidden  "> */}
      <header className="  flex h-[110px] items-center gap-[0.4rem] overflow-hidden border-b-2 border-b-black bg-[url('/banner11.jpeg')] bg-cover px-[4.8rem] max-[767px]:h-[100px] max-[767px]:px-1 max-[374px]:h-[80px] ">
        {/* <UserAvatar /> */}
        {width > 767 ? (
          <SideBar />
        ) : (
          <>
            <Logo />
            <MainNav />
          </>
        )}
        <HeaderMenu setIsVisisble={setIsVisisble} isVisible={isVisible} />
        {/* <DropDown isVisible={isVisible} setIsVisisble={setIsVisisble} /> */}
        {/* <UserAvatar />
      <HeaderMenu /> */}
      </header>
    </>
  );
}

export default Header;
