import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useState } from "react";
import { useSignup } from "./useSignUp";
import { useForm } from "react-hook-form";

function SignupForm() {
  const [isVisible, setIsVisible] = useState(false);
  const { signup, isLoading } = useSignup();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function handleToggle() {
    setIsVisible((visible) => !visible);
  }

  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: reset });
  }
  function onError(errors) {
    console.log(errors);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className=" m-auto  ">
      <div className="  m-auto flex flex-col px-20 py-2 text-center">
        <label htmlFor="fullName">
          <input
            className=" rounded-xl  bg-gray-200 py-4 pl-12 pr-8 text-center font-sans text-lg text-black  !outline-none max-[767px]:py-2 "
            type="text"
            id="fullName"
            placeholder="Enter your Name"
            disabled={isLoading}
            {...register("fullName", { required: "Please enter Name" })}
          />
        </label>
        <span className="mx-4  p-2 text-2xl text-[1rem] text-red-500 max-[767px]:mx-0 max-[767px]:mt-1">
          {errors?.fullName?.message}
        </span>
      </div>
      <div className="  m-auto flex flex-col px-20 py-2 text-center">
        <label htmlFor="email">
          <input
            className=" rounded-xl  bg-gray-200 py-4 pl-12 pr-8 text-center font-sans text-lg text-black  !outline-none max-[767px]:py-2 "
            type="email"
            id="email"
            placeholder="Enter your Email"
            disabled={isLoading}
            {...register("email", {
              required: "Email id is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide valid email address",
              },
            })}
          />
        </label>
        <span className="mx-4  p-2 text-2xl text-[1rem] text-red-500 max-[767px]:mx-0 max-[767px]:mt-1">
          {errors?.email?.message}
        </span>
      </div>
      <div className="relative  m-auto flex flex-col px-20 py-2 text-center">
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            placeholder="Enter your Password"
            disabled={isLoading}
            {...register("password", {
              required: "Password is required",
            })}
            className=" rounded-xl bg-gray-200 py-4 pl-8 pr-12 text-center font-sans text-lg text-black !outline-none max-[767px]:py-2   "
          />
        </label>
        <span className="mx-4  p-2 text-2xl text-[1rem] text-red-500 max-[767px]:mx-0 max-[767px]:mt-1">
          {errors?.password?.message}
        </span>
      </div>
      <div>
        <div className="relative  m-auto  flex flex-col px-20 py-2 text-center">
          <label htmlFor="confirmpassword">
            <input
              id="confirmpassword"
              type={isVisible ? "text" : "password"}
              placeholder="Enter your Password"
              disabled={isLoading}
              {...register("confirmpassword", {
                required: "Password is required",
              })}
              className=" rounded-xl bg-gray-200 py-4 pl-8 pr-12  text-center font-sans text-lg text-black !outline-none max-[767px]:py-2   "
            />
            <span
              onClick={handleToggle}
              value={isVisible}
              className=" absolute   left-[62%] top-[50%] flex -translate-y-[50%] items-center   px-8 py-4  "
            >
              {isVisible ? (
                <HiEye className="cursor-pointer " />
              ) : (
                <HiEyeSlash className=" w-full cursor-pointer" />
              )}
            </span>
          </label>
        </div>
        <p className="mx-4 p-2 text-center text-2xl text-[1rem] text-red-500 max-[767px]:mx-0 max-[767px]:mt-1">
          {errors?.confirmpassword?.message}
        </p>
      </div>
      <div className=" p-4 text-center">
        <button
          disabled={isLoading}
          className="rounded-xl border-2 border-gray-100 bg-red-400 px-6 py-2 font-sans text-2xl text-white max-[767px]:py-1 max-[767px]:text-xl"
        >
          Signup
        </button>
      </div>
    </form>
  );
}
export default SignupForm;
