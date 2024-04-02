import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import {
//   HiOutlineCalendarDays,
//   HiOutlineCog6Tooth,
//   HiOutlineHomeModern,
//   HiOutlineUsers,
// } from "react-icons/hi2";

// const NavList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
// `;

// const StyledNavLink = styled(NavLink)`
//   &:link,
//   &:visited {
//     display: flex;
//     align-items: center;
//     gap: 1.2rem;

//     color: var(--color-grey-600);
//     font-size: 1.6rem;
//     font-weight: 500;
//     padding: 1.2rem 2.4rem;
//     transition: all 0.3s;
//   }

//   /* This works because react-router places the active class on the active NavLink */
//   &:hover,
//   &:active,
//   &.active:link,
//   &.active:visited {
//     color: var(--color-grey-800);
//     background-color: var(--color-grey-50);
//     border-radius: var(--border-radius-sm);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     color: var(--color-grey-400);
//     transition: all 0.3s;
//   }

//   &:hover svg,
//   &:active svg,
//   &.active:link svg,
//   &.active:visited svg {
//     color: var(--color-brand-600);
//   }
// `;

function MainNav() {
  return (
    <nav>
      <div>
        <ul className="max-[424px]:flex max-[424px]:flex-row max-[424px]:gap-[2px]  max-[424px]:text-[1rem] sm:flex sm:flex-row sm:gap-[15px] lg:flex lg:flex-row lg:gap-[0.2rem] lg:py-6 lg:pl-32 lg:font-[PT-serif]  lg:text-3xl lg:font-bold  ">
          {/* <li>
          <NavLink to="/home" className="link">
            {/* <HiOutlineHome /> 
            <span>Home</span>
          </NavLink>
        </li> */}
          <li>
            <NavLink
              to="/gratitude"
              className="lg:link max-[424px]:p-1 sm:px-4 lg:p-8"
            >
              {/* <HiOutlineCalendarDays /> */}
              <span>Gratitude</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/affirmation"
              className="lg:link max-[424px]:p-1 sm:px-4 lg:p-8"
            >
              {/* <HiOutlineHomeModern /> */}
              <span>Affirmation</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quotes"
              className="lg:link max-[424px]:p-1 sm:px-4 lg:p-8"
            >
              {/* <HiOutlineUsers /> */}
              <span>Quotes</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todolist"
              className="lg:link max-[424px]:p-1 sm:px-4 lg:p-8"
            >
              {/* <HiOutlineCog6Tooth /> */}
              <span>ToDo List</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/peptalk"
              className="lg:link max-[424px]:p-1 sm:px-4 lg:p-8"
            >
              {/* <HiOutlineCog6Tooth /> */}
              <span>PepTalk</span>
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
