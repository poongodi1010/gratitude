import { useToDoList } from "./useToDoList";

import ToDoRowForSmall from "./ToDoRowForSmall";
//

function ToDoTableForSmall() {
  const { toDoList = [] } = useToDoList();

  return (
    <div className="my-4 ">
      <header className=" grid grid-cols-[6.5fr_5fr_4fr_4fr_1fr] justify-center px-4 py-4 text-[0.9rem] font-semibold uppercase text-black ">
        <div className="pl-2">Task</div>
        <div className="pl-2">Deadline</div>
        <div className=" pl-6 max-[374px]:pl-2">Priority</div>
        <div className="pl-6 max-[374px]:pl-2">Status</div>
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
