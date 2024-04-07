import { useNavigate } from "react-router-dom";
import { useEditToDoStatus } from "./useEditToDoStatus";
import { useToDo } from "./useToDo";

function ToDoDetail() {
  const { toDo = [], isLoading } = useToDo();
  const { isEditing, editStatus } = useEditToDoStatus();
  const navigate = useNavigate();
  //const { id, status } = toDo;
  console.log("todo", toDo);
  //const { id, status } = toDo;
  //console.log("toDo id status", id, status);
  // function handleChange() {
  //   console.log("inisde handle");
  //   editStatus({ newStatus: { ...toDo, status: "done" }, id: id });
  // }
  //console.log("todois", ...toDo[0]);
  return (
    <div className="mt-20  rounded-xl  bg-slate-100 p-4 shadow-xl hover:bg-slate-300 ">
      {toDo.map((list) => (
        <>
          <header>
            <h2 className="float-left m-4 inline-block text-3xl font-semibold capitalize">
              ToDo List #{list.id}
            </h2>
            <span className=" flex items-end justify-end">
              <p className="m-4 rounded-xl bg-red-400 px-6 py-2 font-sans text-2xl font-semibold capitalize text-white  ">
                {list.status}
              </p>
              <p className="m-4 rounded-xl bg-red-400  px-6 py-2 font-sans text-2xl font-semibold capitalize text-white">
                {list.priority}
              </p>
            </span>
          </header>
          {/* <hr /> */}
          <section className="m-4  ">
            <p className="my-6">
              <span className="mr-2">Task - </span> {list.tasks}
            </p>
            <p className="my-6">
              {" "}
              <span className="mr-2">Deadline - </span> {list.deadline}
            </p>
          </section>
          <div className="mt-14 grid  grid-cols-[12%_10%] justify-start gap-[90rem] ">
            {list.status === "new" && (
              <button
                // onClick={() => editStatus(toDoId, status)}
                onClick={() =>
                  editStatus({
                    newStatus: { ...toDo, status: "in-progress" },
                    id: list.id,
                  })
                }
                disabled={isEditing || isLoading}
                className="m-4 rounded-xl bg-red-400 px-6 py-2 font-sans text-2xl font-semibold text-white hover:bg-red-700 "
              >
                In Progress
              </button>
            )}
            {list.status === "in-progress" && (
              <button
                onClick={() =>
                  editStatus({
                    newStatus: { ...toDo, status: "done" },
                    id: list.id,
                  })
                }
                disabled={isEditing || isLoading}
                className="m-4  rounded-xl bg-red-400 px-6 py-2 font-sans text-2xl font-semibold text-white hover:bg-red-700 "
              >
                Done
              </button>
            )}
            <button
              onClick={() => navigate(-1)}
              className="m-4  rounded-xl bg-red-400 px-6 py-2 font-sans text-2xl font-semibold text-white hover:bg-red-700 "
            >
              Back
            </button>
          </div>
        </>
      ))}
    </div>
  );
}

export default ToDoDetail;
