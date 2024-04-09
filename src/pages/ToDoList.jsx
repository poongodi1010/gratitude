import ToDoTable from "../features/to-do-list/ToDoTable";
import AddToDo from "../features/to-do-list/AddToDo";
import ToDoOperations from "../features/to-do-list/ToDoOperations";
import Footer from "../ui/Footer";
//import Datepicker from "../ui/Datepicker";
//import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ToDoTableByDate from "../features/to-do-list/ToDoTableByDate";
import { useEffect, useState } from "react";
import AddToDoForSmall from "../features/to-do-list/AddToDoForSmall";
import ToDoTableForSmall from "../features/to-do-list/ToDoTableForSmall";
//import { useWindow } from "../context/WindowContext";
//import { useParams } from "react-router-dom";
//import { height, width } from "../utils/constants";
function ToDoList() {
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
  console.log("width", width);
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");

  // // Insert values on load of page
  // console.log("inner", window.innerHeight);
  // window.onload = function () {
  //   console.log("inside onload");
  //   height.innerHTML = window.innerHeight;
  //   width.innerHTML = window.innerWidth;
  // };

  // //Change values when window is resized
  // window.onresize = function () {
  //   // Setting the current height & width
  //   // to the elements
  //   console.log("inisde onresize");
  //   console.log("window.innerwidth", window.innerWidth);
  //   height = window.innerHeight;
  //   width.innerHTML = window.innerWidth;
  //   console.log("h, w", height, width);
  // };
  // console.log("width", width);
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
          <div>
            <AddToDoForSmall width={width} />
          </div>
          {date ? <ToDoTableByDate /> : <ToDoTableForSmall />}
        </div>
      )}
    </>
  );
}
export default ToDoList;
