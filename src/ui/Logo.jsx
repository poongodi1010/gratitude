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
        className="mt-4 flex h-[80%] w-full cursor-pointer justify-start rounded-[50%] shadow-2xl max-[767px]:my-2 max-[767px]:h-[20%] max-[767px]:w-[25%] max-[767px]:px-2"
        src="/logo2.jpeg"
        alt="Logo"
        onClick={() => navigate(`/home`)}
      />
    </div>
  );
}

export default Logo;
