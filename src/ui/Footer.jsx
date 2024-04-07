//import { format } from "date-fns";
import { addDays, format } from "date-fns";
import ToDoFooter from "../features/to-do-list/ToDoFooter";
//import { SequenceDate } from "../utils/helpers";

//let sequenceDate = [];

function Footer() {
  let futureDate1 = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date();
    console.log("looping", i);
    futureDate1.push(format(addDays(currentDate, i), "yyyy-MM-dd"));
  }

  return (
    <footer>
      <ToDoFooter dates={futureDate1} />
    </footer>
  );
}
export default Footer;
