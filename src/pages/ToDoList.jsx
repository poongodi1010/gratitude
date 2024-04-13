import ToDoTable from "../features/to-do-list/ToDoTable";
import AddToDo from "../features/to-do-list/AddToDo";
import ToDoOperations from "../features/to-do-list/ToDoOperations";
import Footer from "../ui/Footer";
import { useSearchParams } from "react-router-dom";
import ToDoTableByDate from "../features/to-do-list/ToDoTableByDate";
import { useEffect, useState } from "react";
import AddToDoForSmall from "../features/to-do-list/AddToDoForSmall";
import ToDoTableForSmall from "../features/to-do-list/ToDoTableForSmall";

function ToDoList() {
  //to get the screen width
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");

  return (
    <>
      {width > 767 ? (
        <div>
          <div className="flex justify-between ">
            <AddToDo />
            <ToDoOperations />
          </div>
          {date ? <ToDoTableByDate /> : <ToDoTable />}
          <Footer />
        </div>
      ) : (
        <div>
          <div className="flex justify-between ">
            <AddToDoForSmall />
            <ToDoOperations />
          </div>
          {date ? <ToDoTableByDate /> : <ToDoTableForSmall />}
        </div>
      )}
    </>
  );
}
export default ToDoList;
