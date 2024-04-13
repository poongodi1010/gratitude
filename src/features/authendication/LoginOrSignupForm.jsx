import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { NavLink } from "react-router-dom";

function LoginOrSignupForm() {
  const [signUp, setSignUp] = useState(false);
  function handleSignUp() {
    setSignUp((s) => !s);
  }

  return (
    <div className="m-auto grid h-full w-1/2 grid-cols-[65%_65%] items-center justify-center pt-20 max-[767px]:m-0 max-[767px]:flex max-[767px]:w-full max-[767px]:flex-col max-[767px]:items-center max-[767px]:justify-center max-[767px]:px-8 max-[767px]:pt-8 ">
      <div className="h-full items-center rounded-xl border-[1px] border-gray-900 bg-[url('/banner10.jpeg')] bg-cover px-32 max-[767px]:h-full max-[767px]:w-full max-[767px]:px-16">
        <h1 className="pt-24 text-center font-sans text-3xl font-bold max-[767px]:py-11 max-[767px]:text-xl">
          Welcome to the world of{" "}
          <span className="text-5xl leading-[60px] max-[767px]:text-2xl">
            {" "}
            Gratify!
          </span>
        </h1>
      </div>
      <div className="grid h-full items-center rounded-xl border-[1px] border-gray-900 px-32 py-20 max-[767px]:w-full  max-[767px]:px-4 max-[767px]:py-8 ">
        <h2 className="m-3 py-2 text-center text-3xl font-bold max-[767px]:m-0 max-[767px]:text-xl">
          {signUp ? "Sign Up to Your Account" : "Login to Your Account"}
        </h2>
        {signUp ? <SignupForm /> : <LoginForm />}
        <p className="m-3 pt-4 text-center text-lg max-[767px]:pt-2 max-[767px]:text-[1rem]">
          {signUp ? "Already have an account." : "Dont have account."}
          <button
            onClick={handleSignUp}
            value={signUp}
            className="cursor-pointer font-semibold italic !outline-none"
          >
            {signUp ? (
              <>
                <NavLink to="/login">Login</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/signup">Sign Up</NavLink>
              </>
            )}
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginOrSignupForm;
