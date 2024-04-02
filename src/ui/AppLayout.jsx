import { Outlet } from "react-router-dom";
import Header from "./Header";
//import SideBar from "./SideBar";
// import styled from "styled-components";

// const StyledAppLayout = styled.div`
//   display: grid;
//   grid-template-columns: 26rem 1fr;
//   grid-template-rows: auto 1fr;
//   height: 100vph;
// `;
// const Main = styled.main`
//   background-color: var(--color-grey-50);
//   padding: 4rem 4.8rem 6.8rem;
//   /* overflow: scroll; */
// `;

// const Container = styled.div`
//   max-width: 120rem;
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;
//   margin: 0 auto;
// `;
function AppLayout() {
  return (
    // <div className="grid h-screen grid-cols-[18rem_1fr] grid-rows-[auto_1fr] ">
    <div className=" h-screen  ">
      <Header />
      {/* <SideBar /> */}
      <main className="overflow-y-scroll px-[4rem] pb-[6.8rem] ">
        <div className="mx-auto my-0 flex max-w-[120rem] flex-col gap-[3.2rem] max-[424px]:w-full   ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
