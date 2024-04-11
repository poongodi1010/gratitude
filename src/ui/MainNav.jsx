import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav className="max-[767px]:fixed max-[767px]:bottom-0 max-[767px]:z-50   max-[767px]:w-full max-[767px]:border-t-2 max-[767px]:border-t-black max-[767px]:bg-[url('/banner11.jpeg')] max-[767px]:bg-cover">
      <div>
        {/* <ul className="max-[424px]:flex max-[424px]:flex-row max-[424px]:gap-[2px]  max-[424px]:text-[1rem] sm:flex sm:flex-row sm:gap-[15px] lg:flex lg:flex-row lg:gap-[0.2rem] lg:py-6 lg:pl-32 lg:font-[PT-serif]  lg:text-3xl lg:font-bold  "> */}
        <ul className="mt-3 flex flex-row gap-[0.2rem] py-6 pl-32 font-[PT-serif] text-3xl font-bold max-[767px]:bottom-0 max-[767px]:mt-0  max-[767px]:grid max-[767px]:w-full max-[767px]:grid-cols-[1fr_1fr_1fr_1fr_1fr] max-[767px]:py-1 max-[767px]:pl-1  max-[767px]:text-[1.5rem] ">
          {/* <li>
          <NavLink to="/home" className="link">
            {/* <HiOutlineHome /> 
            <span>Home</span>
          </NavLink>
        </li> */}
          <li>
            <NavLink
              to="/gratitude"
              className="link p-8 max-[767px]:px-1 max-[767px]:py-4"
            >
              {/* <HiOutlineCalendarDays /> */}
              <span className="max-[767px]:text-xl">Gratitude</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/affirmation"
              // className="lg:link max-[424px]:p-1 sm:px-4 lg:p-8"
              className="link p-8 max-[767px]:px-1 max-[767px]:py-6"
            >
              {/* <HiOutlineHomeModern /> */}
              <span className="max-[767px]:text-xl">Affirmation</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quotes"
              className="link p-8 max-[767px]:px-1 max-[767px]:py-6"
            >
              {/* <HiOutlineUsers /> */}
              <span className="max-[767px]:text-xl">Quotes</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todolist"
              className="link p-8 max-[767px]:px-1 max-[767px]:py-6"
            >
              {/* <HiOutlineCog6Tooth /> */}
              <span className="max-[767px]:text-xl">ToDo List</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/peptalk"
              className="link p-8 max-[767px]:px-1 max-[767px]:py-6"
            >
              {/* <HiOutlineCog6Tooth /> */}
              <span className="max-[767px]:text-xl">PepTalk</span>
            </NavLink>
          </li>
          {/* <li>
          <NavLink to="/account" className="link">
            {/* <HiOutlineCog6Tooth /> *
            <span>Account</span>
          </NavLink>
        </li> */}
          {/* <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;
