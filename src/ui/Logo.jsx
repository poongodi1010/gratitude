// import styled from "styled-components";
// import { useDarkMode } from "../context/DarkModeContext";
// const StyledLogo = styled.div`
//   text-align: center;
// `;

import { useNavigate } from "react-router-dom";

// const Img = styled.img`
//   height: 9.6rem;
//   width: auto;
// `;

function Logo() {
  // const { isDarkMode } = useDarkMode();

  // const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  const navigate = useNavigate();
  return (
    <div>
      <img
        className="my-10 flex h-20 w-auto cursor-pointer justify-start"
        src="/logo.jpg"
        alt="Logo"
        onClick={() => navigate(`/home`)}
      />
    </div>
  );
}

export default Logo;
