/* eslint-disable react/prop-types */
import { useQueryClient } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";
import { useCreateGratitude } from "./useCreateGratitude";
import { useForm } from "react-hook-form";
import { useEditGratitude } from "./useEditGratitude";
import { FormattedDate } from "../../utils/helpers";

// eslint-disable-next-line react/prop-types
function CreateGratitudeEntry({ onCloseModal, gratitudeToEdit = {} }) {
  const { id: editId, ...editValues } = gratitudeToEdit;
  const isEditSession = Boolean(editId);
  const queryClient = useQueryClient();

  const { isCreating, createGratitude } = useCreateGratitude();
  const { isEditing, editGratitude } = useEditGratitude();

  const { reset, register, handleSubmit } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const todayDate = FormattedDate();

  function onSubmit(data) {
    if (isEditSession) {
      editGratitude(
        { newGratitudeData: { ...data }, id: editId, modified_date: todayDate },
        {
          onSuccess: (data) => {
            console.log(data);
            reset();
            onCloseModal?.();
            queryClient.invalidateQueries({ queryKey: ["gratitude"] });
          },
        },
      );
    } else {
      createGratitude(
        {
          ...data,
        },
        {
          onSuccess: (data) => {
            console.log(data);
            reset();
            onCloseModal?.();
            queryClient.invalidateQueries({ queryKey: ["gratitude"] });
          },
        },
      );
    }
  }

  if (isCreating || isEditing) return <Spinner />;
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
        <div className="grid grid-cols-1 items-center gap-2  px-8 pb-8 pt-12">
          <h2>What are you grateful for today?</h2>
          <label htmlFor="gratitude"></label>
          <p>{todayDate}</p>
          <textarea
            className="cursor-pointer resize-none overflow-hidden  p-4 font-sans text-2xl font-semibold"
            type="text"
            id="gratitude"
            {...register("gratitude", {
              required: "This field is required",
            })}
            rows={4}
            cols={20}
            placeholder="I am very grateful for..."
          />
          <div className="flex justify-around">
            <button type="reset" onClick={() => onCloseModal?.()}>
              Cancel
            </button>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateGratitudeEntry;
