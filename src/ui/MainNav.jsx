import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav className="max-[767px]:fixed max-[767px]:bottom-0 max-[767px]:right-0 max-[767px]:z-50 max-[767px]:h-[70px]  max-[767px]:w-full max-[767px]:border-t-2 max-[767px]:border-t-black max-[767px]:bg-[url('/banner11.jpeg')] max-[767px]:bg-cover">
      <div>
        <ul className="mt-3 flex flex-row gap-[0.2rem] py-6 pl-32 font-[PT-serif] text-3xl font-bold max-[767px]:bottom-0 max-[767px]:mt-0  max-[767px]:grid max-[767px]:w-full max-[767px]:grid-cols-[1fr_1fr_1fr_1fr_1fr] max-[767px]:py-1 max-[767px]:pl-1  max-[767px]:text-[1.5rem] ">
          <li>
            <NavLink to="/gratitude" className="link p-8 max-[767px]:px-1 ">
              <span className="max-[767px]:text-xl">Gratitude</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/affirmation" className="link p-8 max-[767px]:px-1 ">
              <span className="max-[767px]:text-xl">Affirmation</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/quotes" className="link p-8 max-[767px]:px-1 ">
              <span className="max-[767px]:text-xl">Quotes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/todolist" className="link p-8 max-[767px]:px-1 ">
              <span className="max-[767px]:text-xl">ToDo List</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/peptalk" className="link p-8 max-[767px]:px-1 ">
              <span className="max-[767px]:text-xl">PepTalk</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;
