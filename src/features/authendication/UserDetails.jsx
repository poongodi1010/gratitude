import { useState } from "react";
import { useUsers } from "./useUsers";
import { useUpdateUser } from "./useUpdateUser";

function UserDetails() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUsers();
  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName) return;

    updateUser(
      { fullName },
      {
        onSuccess: () => {
          e.target.reset();
        },
      },
    );
  }

  return (
    <form className="ml-[10rem] mt-6 max-[767px]:ml-0" onSubmit={handleSubmit}>
      <div>
        <div>
          <label
            htmlFor="name"
            className="mr-8 text-3xl font-semibold max-[767px]:text-[1.5rem]"
          >
            Name{" "}
          </label>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={isUpdating}
          className="mt-4 w-[70%]  rounded-xl bg-gray-300  px-4 py-4 font-sans text-2xl text-black !outline-none max-[767px]:w-full max-[767px]:text-[1.5rem]"
        />
      </div>
      <div className="mt-8 text-3xl font-semibold">
        <div>
          <label htmlFor="email" className="mr-8 max-[767px]:text-[1.5rem]">
            Email{" "}
          </label>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          disabled="disabled"
          className="mt-4 w-[70%] rounded-xl bg-gray-300 px-4 py-4 font-sans text-2xl text-black  !outline-none max-[767px]:w-full  max-[767px]:text-[1.5rem] "
        />
      </div>

      <button
        className="mt-8 w-[70%] rounded-xl bg-blue-400 px-4 py-4 text-white max-[767px]:w-full  max-[767px]:text-[1.5rem]"
        disabled={isUpdating}
      >
        Update Profile
      </button>
    </form>
  );
}

export default UserDetails;
