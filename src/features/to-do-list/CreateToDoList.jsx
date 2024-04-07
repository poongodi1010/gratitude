/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useAddToDo } from "./useAddToDo";
import { useEditToDoStatus } from "./useEditToDoStatus";
import { useQueryClient } from "@tanstack/react-query";
//import Datepicker from "../../ui/Datepicker";
//import { useUsers } from "../authendication/useUsers";

function CreateToDoList({ onCloseModal, toDoToEdit = {} }) {
  const { id: editId, ...editValues } = toDoToEdit;
  const editSession = Boolean(editId);
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: editSession ? editValues : {},
  });
  const { errors } = formState;
  const { addToDo, isAdding } = useAddToDo();
  const { isEditing, editStatus } = useEditToDoStatus();
  // const { user } = useUsers();
  // console.log("inside createdtodo ", user.id);
  function onSubmit(data) {
    if (editSession) {
      editStatus({ newStatus: { ...data }, id: editId });
      reset;
      onCloseModal?.();
      queryClient.invalidateQueries({ queryKey: ["to_do"] });
    } else {
      console.log("data to do", data);
      addToDo({ ...data });
      reset;
      onCloseModal?.();
      queryClient.invalidateQueries({ queryKey: ["to_do"] });
    }
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <div>
      <h1 className=" mt-1 text-center text-3xl">To Do List</h1>
      <form
        className=" m-4 my-8  grid grid-cols-[15%_50%_20%] "
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label htmlFor="tasks" className="mr-2 px-4 pt-8 text-left text-2xl">
          Task:
        </label>
        <input
          type="text"
          name="text"
          id="tasks"
          placeholder="What would you like to do..."
          className="my-4 mr-8 w-1/2 rounded-2xl border-2 border-gray-600 px-6 py-4 text-2xl !outline-none transition-all duration-75  "
          {...register("tasks", {
            required: "Please enter task ",
          })}
        />
        <span className="mx-4 mt-6 p-4 text-2xl text-red-500">
          {errors?.tasks?.message}
        </span>
        <label htmlFor="deadline" className="mr-2 px-4 pt-8 text-left text-2xl">
          Deadline:
        </label>
        <input
          type="date"
          id="deadline"
          className="my-4 w-1/2 rounded-2xl border-2 border-gray-600 px-6 py-4 text-2xl !outline-none transition-all duration-75  "
          {...register("deadline", {
            required: "Deadline is required",
          })}
        />
        <span className="mx-4 mt-6 p-4 text-2xl  text-red-500">
          {errors?.deadline?.message}
        </span>
        <label
          htmlFor="priority"
          className="mr-2 px-4 pt-8  text-left text-2xl"
        >
          Priority:
        </label>
        <select
          id="priority"
          name="priority"
          className="my-4 w-1/2 rounded-2xl border-2 border-gray-600 px-8 py-4 text-2xl !outline-none transition-all duration-75 "
          {...register("priority", {
            required: "This field is required",
          })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <span className="mx-4 mt-6 p-4 text-2xl text-red-900">
          {errors?.priority?.message}
        </span>
        {/* //Status */}
        <label htmlFor="status" className="mr-2 px-4 pt-8  text-left text-2xl">
          Status:
        </label>
        <select
          id="status"
          name="status"
          className="my-4 w-1/2 rounded-2xl border-2 border-gray-600 px-8 py-4 text-2xl !outline-none transition-all duration-75 "
          {...register("status", {
            required: "This field is required",
          })}
        >
          <option value="new">New</option>
          <option value="in-progress">In-Progress</option>
          <option value="done">Done</option>
        </select>
        <span className="mx-4 mt-6 p-4 text-2xl text-red-900">
          {errors?.status?.message}
        </span>
        <label htmlFor="date" className="mr-2 px-4 pt-8 text-left text-2xl">
          Date :
        </label>
        <input
          type="date"
          id="date"
          className="my-4 w-1/2 rounded-2xl border-2 border-gray-600 px-6 py-4 text-2xl !outline-none transition-all duration-75 "
          {...register("date", {
            required: "date is required",
          })}
        />
        <span className="mx-4 mt-6 p-4 text-2xl  text-red-500">
          {errors?.date?.message}
        </span>
        <button
          className="ml-8 rounded-2xl border-2 border-gray-400 bg-red-400 px-6 py-4 text-2xl !outline-none"
          disabled={isAdding || isEditing}
        >
          {editSession ? "Edit" : "Add"}
        </button>
        {/* <h2 className=" px-2 py-4 text-center text-2xl font-semibold">
          Do you want to copy the details to other days?
        </h2>
        <Datepicker /> */}
      </form>
    </div>
  );
}

export default CreateToDoList;
