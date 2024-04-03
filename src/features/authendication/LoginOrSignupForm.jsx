import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { NavLink } from "react-router-dom";

function LoginOrSignupForm() {
  const [signUp, setSignUp] = useState(false);
  //const navigate = useNavigate();
  function handleSignUp() {
    setSignUp((s) => !s);
  }

  return (
    <div className="m-auto grid h-full w-1/2 grid-cols-[65%_65%] items-center justify-center pt-24 ">
      <div className="h-full items-center rounded-xl border-[1px] border-gray-900 bg-[url('/cherry.jpg')] bg-cover px-32 ">
        <h1 className="pt-24 text-center font-sans text-3xl font-bold">
          Welcome to the world of{" "}
          <span className="text-5xl leading-[60px]"> Gratitude!</span>
        </h1>
      </div>
      <div className="grid h-full items-center rounded-xl border-[1px] border-gray-900 px-32 py-32 ">
        <h2 className="m-3 text-center text-3xl font-bold">
          {signUp ? "Sign Up to Your Account" : "Login to Your Account"}
        </h2>
        {signUp ? <SignupForm /> : <LoginForm />}
        <p className="m-3 pt-4 text-center text-lg">
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

{
  /* <NavLink to="/gratitude" className="link">
{/* <HiOutlineCalendarDays /> *
<span>Gratitude</span>
</NavLink> */
}
export default LoginOrSignupForm;
