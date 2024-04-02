import ToDoRow from "./ToDoRow";
import { useCopyToDo } from "./useCopyToDO";

function ToDoTableByDate() {
  const { toDoListByDate = [] } = useCopyToDo();
  console.log("todolistbydate", toDoListByDate);
  if (toDoListByDate.length === 0)
    return (
      <p className="my-32 text-center text-3xl font-semibold">
        No List found for this day.please add todo if you havent.{" "}
      </p>
    );
  return (
    <div className="my-12 ">
      <header className="grid grid-cols-6 justify-center py-4 text-2xl font-bold uppercase text-black">
        <div className="text-center">
          {/* <label htmlFor="checkbox"></label>
      <input type="checkbox" id="checkbox" /> */}
        </div>
        <div className=" text-center">Task</div>
        <div className=" text-center">Deadline</div>
        <div className="text-center">Priority</div>
        <div className="text-center">Status</div>
        <div></div>
      </header>
      {toDoListByDate.map((list) => (
        <ToDoRow list={list} key={list.id} />
      ))}
    </div>
  );
}

export default ToDoTableByDate;
