/* eslint-disable react/prop-types */
// const StyledConfirmDelete = styled.div`
//   width: 40rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1.2rem;

//   & p {
//     color: var(--color-grey-500);
//     margin-bottom: 1.2rem;
//   }

//   & div {
//     display: flex;
//     justify-content: flex-end;
//     gap: 1.2rem;
//   }
// `;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div className="flex w-[100rem] flex-col gap-5 font-sans max-[767px]:w-full ">
      <h3 className="font-bold">Delete {resourceName}</h3>
      <p className="color-grey-500 max-[767px]:text-[1.4rem]">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-5 max-[767px]:items-end">
        <button
          className="m-2 rounded-lg border-2 bg-white p-4 text-2xl font-medium text-gray-600 hover:text-gray-900 max-[767px]:text-[1.35rem]"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button
          className="m-2 rounded-lg bg-red-700 p-4 text-2xl font-medium text-red-200 hover:text-red-800 max-[767px]:text-[1.35rem]"
          disabled={disabled}
          onClick={onConfirm}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
