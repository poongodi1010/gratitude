//import { useForm } from "react-hook-form";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useLogin } from "./useLogin";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
// Email regex: /\S+@\S+\.\S+/

function LoginForm() {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { login, isLoading } = useLogin();
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function handleToggle() {
    setIsVisible((visible) => !visible);
  }

  function onSubmit(data) {
    console.log("data to do", data);
    login({ ...data });
    reset;
    queryClient.invalidateQueries({ queryKey: ["user"] });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className=" m-auto   ">
      <div className="  m-auto flex flex-col px-20 py-4 text-center   max-[767px]:my-2 max-[767px]:px-12 max-[767px]:py-2">
        <label htmlFor="email"></label>
        <input
          className=" rounded-xl  bg-gray-200 py-4 pl-12 pr-8 text-center font-sans text-lg text-black !outline-none max-[767px]:py-2 max-[767px]:pl-[4.8rem] max-[767px]:pr-10 max-[767px]:text-[1rem] "
          id="email"
          type="email"
          name="email"
          placeholder="Enter your Email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          {...register("email", {
            required: "Please enter email ",
          })}
        />
        <span className="mx-4 mt-6 p-4 text-2xl text-red-500 max-[767px]:mx-0 max-[767px]:mt-1 max-[767px]:text-[1.2rem]">
          {errors?.email?.message}
        </span>
      </div>
      <div className="relative  m-auto  flex  flex-col px-20 py-4  text-center  max-[767px]:px-12  max-[767px]:py-2">
        <label htmlFor="password">
          <input
            id="password"
            name="password"
            type={isVisible ? "text" : "password"}
            placeholder="Enter your Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            {...register("password", {
              required: "Please enter password ",
            })}
            className=" rounded-xl bg-gray-200 py-4  pl-8 pr-12 text-center font-sans text-lg text-black !outline-none max-[767px]:py-2 max-[767px]:pl-10 max-[767px]:pr-[4.8rem] max-[767px]:text-[1rem]   "
          />
          {/* <span
              onClick={handleToggle}
              value={isVisible}
              className=" absolute   left-[62%] top-[50%] flex -translate-y-[50%] items-center  px-8 py-4 max-[767px]:pl-4 max-[767px]:pr-0  "
            >
              {/* <HiEye /> *
              {isVisible ? (
                <HiEye className="cursor-pointer " />
              ) : (
                <HiEyeSlash className=" w-full cursor-pointer" />
              )}
            </span> */}
          <span
            onClick={handleToggle}
            value={isVisible}
            className={` absolute   left-[62%] max-[767px]:${errors?.email?.message ? "top-[24%]" : "top-[25%]"} flex -translate-y-[50%] items-center  px-8 py-4 max-[767px]:pl-4 max-[767px]:pr-0  `}
          >
            {isVisible ? (
              <HiEye className="cursor-pointer " />
            ) : (
              <HiEyeSlash className=" w-full cursor-pointer" />
            )}
          </span>
        </label>

        <span className="mx-4 mt-6 p-4 text-2xl text-red-500 max-[767px]:mx-0 max-[767px]:mt-1 max-[767px]:text-[1.2rem]">
          {errors?.password?.message}
        </span>
      </div>
      {/* absolute top-[50%]    -translate-y-[50%]*/}
      <div className=" p-4 text-center max-[374px]:p-1">
        <button
          disabled={isLoading}
          className="rounded-xl border-2 border-gray-100 bg-red-400 px-6 py-2 font-sans text-2xl text-white !outline-none max-[767px]:px-4 max-[767px]:text-xl"
        >
          Login
        </button>
      </div>
    </form>
  );
}
export default LoginForm;
