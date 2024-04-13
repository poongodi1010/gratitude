import { Outlet } from "react-router-dom";
import Header from "./Header";
import AppFooter from "./AppFooter";

function AppLayout() {
  return (
    <>
      <div className=" h-screen  ">
        <Header />
        <main className="overflow-x-hidden overflow-y-scroll px-[4rem] pb-[6.8rem] max-[767px]:overflow-x-hidden max-[767px]:px-2 ">
          <div className="mx-auto my-0 flex max-w-[120rem] flex-col gap-[3.2rem] max-[767px]:mx-0    ">
            <Outlet />
          </div>
        </main>
        <footer className="sticky py-3">
          <AppFooter />
        </footer>
      </div>
    </>
  );
}

export default AppLayout;
