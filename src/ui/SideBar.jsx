import Logo from "./Logo";
import MainNav from "./MainNav";

function SideBar() {
  return (
    <aside className="  sticky top-0 m-0 flex h-[110px] w-full flex-row gap-[0.3rem] bg-none px-[2rem] max-[767px]:grid max-[767px]:grid-cols-[4fr_4fr] max-[767px]:px-1">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default SideBar;
