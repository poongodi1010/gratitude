import ToDoTable from "../features/to-do-list/ToDoTable";
import AddToDo from "../features/to-do-list/AddToDo";
import ToDoOperations from "../features/to-do-list/ToDoOperations";
import Footer from "../ui/Footer";
//import Datepicker from "../ui/Datepicker";
//import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ToDoTableByDate from "../features/to-do-list/ToDoTableByDate";
//import { useParams } from "react-router-dom";

function ToDoList() {
  //const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");
  console.log("date in todolist 14", date);
  // const { date } = useParams();

  // // {
  // //   date !== "undefined" ? { ...date, date: date } : { ...date, date: "" };
  // // }
  // console.log("date in todolist", date);
  // const toggle = () => {
  //   setOpen(!open);
  // };
  // function handleChange() {
  //   <Datepicker />;
  // }
  return (
    <div>
      <div className="flex justify-between ">
        <AddToDo />
        {/* <button
          onClick={() => {
            toggle;
          }}
          className=" my-6  rounded-xl  bg-[#43766C]   px-4 py-6 text-center text-white"
        >
          Copy List
        </button>
        {open && <Datepicker />} */}

        <ToDoOperations />
      </div>
      {date ? <ToDoTableByDate /> : <ToDoTable />}
      <Footer />
    </div>
  );
}
export default ToDoList;
