import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";

function UpdatePassword() {
  const { updateUser, isUpdating } = useUpdateUser();
  const { register, getValues, reset, handleSubmit } = useForm();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset() });
  }

  return (
    <form
      className="ml-[10rem] mt-6 max-[767px]:ml-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div>
          <label
            htmlFor="name"
            className="mr-8 text-3xl font-semibold max-[767px]:text-[1.5rem]"
          >
            Password
          </label>
        </div>
        <input
          type="password"
          name="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          disabled={isUpdating}
          className="mt-4 w-[70%]  rounded-xl bg-gray-300  px-4 py-4 font-sans  text-2xl text-black !outline-none max-[767px]:w-full max-[767px]:text-[1.5rem]"
        />
      </div>
      <div className="mt-8 ">
        <div>
          <label
            htmlFor="email"
            className="mr-8 text-3xl font-semibold max-[767px]:text-[1.5rem] "
          >
            Confirm Password{" "}
          </label>
        </div>
        <input
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          {...register("confirmpassword", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
          disabled={isUpdating}
          className="mt-4 w-[70%]  rounded-xl bg-gray-300  px-4 py-4 font-sans  text-2xl text-black !outline-none max-[767px]:w-full max-[767px]:text-[1.5rem]"
        />
      </div>

      <button
        className="mt-8 w-[70%] rounded-xl bg-blue-400 px-4 py-4 text-white max-[767px]:w-full max-[767px]:text-[1.5rem] "
        disabled={isUpdating}
      >
        Update Password
      </button>
    </form>
  );
}

export default UpdatePassword;
