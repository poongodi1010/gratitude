import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import SideBar from "./SideBar";
import { useEffect } from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";

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
      <header className="  flex h-[110px] items-center gap-[0.4rem] overflow-hidden border-b-2 border-b-black bg-[url('/banner11.jpeg')] bg-cover px-[4.8rem] max-[767px]:h-[100px] max-[767px]:px-1 max-[374px]:h-[80px] ">
        {width > 767 ? (
          <SideBar />
        ) : (
          <>
            <Logo />
            <MainNav />
          </>
        )}
        <HeaderMenu setIsVisisble={setIsVisisble} isVisible={isVisible} />
      </header>
    </>
  );
}

export default Header;
