/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const WindowContext = createContext();

function WindowProvider({ children }) {
  let height;
  let width;

  // Insert values on load of page
  window.onload = function () {
    height = window.innerHeight;
    width = window.innerWidth;
  };

  window.onresize = function () {
    // Setting the current height & width
    // to the element
    height = window.innerHeight;
    width = window.innerWidth;
  };

  return (
    <WindowContext.Provider
      value={{
        height,
        width,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
}

function useWindow() {
  const context = useContext(WindowContext);

  if (context === undefined)
    throw new Error("CitiesContext was used outside of the CitiesProvider");
  return context;
}

export { WindowProvider, useWindow };
