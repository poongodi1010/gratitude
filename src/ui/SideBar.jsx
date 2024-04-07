// import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

// import Uploader from "../data/Uploader";

// const StyledSidebar = styled.aside`
//   background-color: var(--color-grey-0);
//   padding: 3.2rem 2.4rem;
//   border-right: 1px solid var(--color-grey-100);
//   grid-row: 1/-1;
//   display: flex;
//   flex-direction: column;
//   gap: 3.6rem;
// `;
function SideBar() {
  return (
    // <aside className="row-span-full flex flex-col gap-[3.6rem] bg-[url('cherry.jpg')] bg-cover px-[2rem] py-[3.2rem]">
    // <aside className=" max-[424px]:fixed max-[424px]:bottom-0 max-[424px]:flex  max-[424px]:w-full max-[424px]:flex-row max-[424px]:gap-[2px] sm:fixed sm:bottom-0  sm:my-4 sm:flex sm:w-full sm:flex-row sm:gap-[2rem]  sm:px-1 sm:py-2 lg:sticky lg:top-0  lg:m-0 lg:flex lg:h-[110px] lg:w-full lg:flex-row lg:gap-[0.3rem] lg:bg-none lg:px-[2rem]">
    <aside className="  sticky top-0  m-0 flex h-[110px] w-full flex-row gap-[0.3rem] bg-none px-[2rem]">
      <Logo />
      <MainNav />

      {/* <Uploader /> */}
    </aside>
  );
}

export default SideBar;
