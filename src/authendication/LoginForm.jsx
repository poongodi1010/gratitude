//import { useForm } from "react-hook-form";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useLogin } from "./useLogin";
import { useState } from "react";
// Email regex: /\S+@\S+\.\S+/

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { login, isLoading } = useLogin();

  function handleToggle() {
    setIsVisible((visible) => !visible);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <form onSubmit={handleSubmit} className=" m-auto  ">
      <div className="  m-auto flex px-20 py-4 text-center">
        <label htmlFor="email"></label>
        <input
          className=" rounded-xl  bg-gray-200 py-4 pl-12 pr-8 text-center font-sans text-lg  text-black !outline-none "
          type="email"
          id="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <div className="relative  m-auto  flex px-20 py-4 text-center">
        <label htmlFor="password">
          <input
            id="password"
            type={isVisible ? "text" : "password"}
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className=" rounded-xl bg-gray-200 py-4 pl-8 pr-12 text-center font-sans text-lg text-black !outline-none   "
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
      {/* absolute top-[50%]    -translate-y-[50%]*/}
      <div className=" p-4 text-center">
        <button
          disabled={isLoading}
          className="rounded-xl border-2 border-gray-100 bg-red-400 px-6 py-2 font-sans text-2xl text-white"
        >
          Login
        </button>
      </div>
    </form>
  );
}
export default LoginForm;
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
