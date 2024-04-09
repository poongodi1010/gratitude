import { useToDoList } from "./useToDoList";
//import { useCopyToDo } from "./useCopyToDO";

import ToDoRow from "./ToDoRow";
//

function ToDoTable() {
  const { toDoList = [] } = useToDoList();

  return (
    <div className="my-12 ">
      <header className=" grid grid-cols-7 justify-center py-4 text-2xl font-bold uppercase text-black ">
        <div className="text-center">
          {/* <label htmlFor="checkbox"></label>
          <input type="checkbox" id="checkbox" /> */}
        </div>
        <div className=" text-center">Task</div>
        <div className=" text-center">Deadline</div>
        <div className="text-center">Priority</div>
        <div className="text-center">Status</div>
        <div className="text-center">Date</div>
        <div></div>
      </header>
      {toDoList.map((list) => (
        <ToDoRow list={list} key={list.id} />
      ))}
    </div>
  );
}

export default ToDoTable;
