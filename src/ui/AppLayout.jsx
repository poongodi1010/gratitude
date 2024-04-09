import { Outlet } from "react-router-dom";
import Header from "./Header";
import AppFooter from "./AppFooter";

function AppLayout() {
  return (
    <>
      {/* // <div className="grid h-screen grid-cols-[18rem_1fr] grid-rows-[auto_1fr] "> */}
      <div className=" h-screen  ">
        <Header />
        {/* <SideBar /> */}
        <main className="overflow-y-scroll px-[4rem] pb-[6.8rem] max-[767px]:px-2 ">
          <div className="mx-auto my-0 flex max-w-[120rem] flex-col gap-[3.2rem] max-[767px]:mx-0    ">
            <Outlet />
          </div>
        </main>
        <footer className="sticky py-3">
          <AppFooter />
        </footer>
      </div>
      {/* <footer className="sticky py-3">
        <AppFooter />
      </footer> */}
    </>
  );
}

export default AppLayout;
