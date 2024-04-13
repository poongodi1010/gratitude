/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const initialState = { passwordChange: false };

function reducer(state, action) {
  switch (action.type) {
    case "account/userdetails":
      return {
        ...state,
        passwordChange: action.payload,
      };

    case "account/updatepassword":
      return { ...state, passwordChange: action.payload };

    default:
      throw new Error("unknow action type");
  }
}
function UserProvider({ children }) {
  const [{ passwordChange }, dispatch] = useReducer(reducer, initialState);

  function updatePassword(data) {
    dispatch({ type: "account/updatepassword", payload: data.passwordChange });
  }

  function userdetails(data) {
    dispatch({ type: "account/userdetails", payload: data.passwordChange });
  }

  return (
    <UserContext.Provider
      value={{ passwordChange, updatePassword, userdetails }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUserToggle() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside of the provider");
  return context;
}
export { UserProvider, useUserToggle };
