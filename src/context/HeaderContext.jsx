/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  const close = setIsVisible(false);
  const open = setIsVisible;
  function handleVisible() {
    setIsVisible((v) => !v);
  }
  return (
    <HeaderContext.Provider value={{ open, close, handleVisible, isVisible }}>
      {children}
    </HeaderContext.Provider>
  );
}

// function useHeaderToggle() {
//   const context = useContext(HeaderContext);

//   if (context === undefined)
//     throw new Error("HeaderContext was used outside of the provider");
//   return context;
// }
export { HeaderProvider, HeaderContext };
