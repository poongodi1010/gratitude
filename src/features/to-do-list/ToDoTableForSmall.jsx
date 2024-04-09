import { useToDoList } from "./useToDoList";
//import { useCopyToDo } from "./useCopyToDO";

import ToDoRowForSmall from "./ToDoRowForSmall";
//

function ToDoTableForSmall() {
  const { toDoList = [] } = useToDoList();

  return (
    <div className="my-12 ">
      <header className=" grid grid-cols-6 justify-center py-4 text-2xl font-bold uppercase text-black ">
        {/* <div className="hidden text-center">
          {/* <label htmlFor="checkbox"></label>
            <input type="checkbox" id="checkbox" /> *
        </div> */}
        <div className=" hidden text-center">Task</div>
        <div className=" hidden text-center">Deadline</div>
        <div className="hidden text-center">Priority</div>
        <div className="hidden text-center">Status</div>
        <div className="hidden text-center">Date</div>
        <div></div>
      </header>
      {toDoList.map((list) => (
        <ToDoRowForSmall list={list} key={list.id} />
      ))}
    </div>
  );
}

export default ToDoTableForSmall;
