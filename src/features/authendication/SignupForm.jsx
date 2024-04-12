//import { useForm } from "react-hook-form";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
//import { useLogin } from "./useLogin";
import { useState } from "react";
import { useSignup } from "./useSignUp";
import { useForm } from "react-hook-form";
//import { useQueryClient } from "@tanstack/react-query";
// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const [isVisible, setIsVisible] = useState(false);
  const { signup, isLoading } = useSignup();
  //const queryClient = useQueryClient();
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
              {/* <HiEye /> */}
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
      {/* absolute top-[50%]    -translate-y-[50%]*/}
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
//const { formState, getValues, register, handleSubmit, reset } = useForm();
//const { errors } = formState;

// function onSubmit({ fullName, email, password }) {
//   signup({ fullName, email, password }, { onSettled: reset });
// }
//   return (
//     <form
//       // onSubmit={handleSubmit(onSubmit)}
//       className="grid  h-full w-1/2 items-center justify-center overflow-hidden rounded-sm border-2 border-gray-500 px-2  py-4 text-lg"
//     >
//       <div className="grid grid-cols-3 items-center gap-4 py-2">
//         <label htmlFor="name" className="font-medium">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="email"
//           className="py-[0.8rem[ rounded-lg border-2 border-gray-600 px-[1.2rem]"
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" name="email" />
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input type="password" id="password" name="password" />
//       </div>
//       <div>
//         <label htmlFor="passwordconfirm">Re Enter Password</label>
//         <input type="password" id="passwordconfirm" name="password" />
//       </div>
//     </form>
//   );
// }
// export default SignupForm;
//     <Form onSubmit={handleSubmit(onSubmit)}>
//       <FormRow label="Full name" error={errors?.fullName?.message}>
//         <Input
//           type="text"
//           id="fullName"
//           disabled={isLoading}
//           {...register("fullName", { required: "This field is required" })}
//         />
//       </FormRow>

//       <FormRow label="Email address" error={errors?.email?.message}>
//         <Input
//           type="email"
//           id="email"
//           disabled={isLoading}
//           {...register("email", {
//             required: "This field is required",
//             pattern: {
//               value: /\S+@\S+\.\S+/,
//               message: "Please provide valid email address",
//             },
//           })}
//         />
//       </FormRow>

//       <FormRow
//         label="Password (min 8 characters)"
//         error={errors?.password?.message}
//       >
//         <Input
//           type="password"
//           id="password"
//           disabled={isLoading}
//           {...register("password", {
//             required: "This field is required",
//             minLength: {
//               value: 8,
//               message: "Password needs a min length of 8 ",
//             },
//           })}
//         />
//       </FormRow>

//       <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
//         <Input
//           type="password"
//           id="passwordConfirm"
//           disabled={isLoading}
//           {...register("passwordConfirm", {
//             required: "This field is required",
//             validate: (value) =>
//               value === getValues().password || "Password need to match",
//           })}
//         />
//       </FormRow>

//       <FormRow>
//         {/* type is an HTML attribute! */}
//         <Button
//           variation="secondary"
//           type="reset"
//           onClick={reset}
//           disabled={isLoading}
//         >
//           Cancel
//         </Button>
//         <Button disabled={isLoading}>Create new user</Button>
//       </FormRow>
//     </Form>
//   );
// }
