import AddGratitude from "../features/grtitude/AddGratitude";
import GratitudeTable from "../features/grtitude/GratitudeTable";
//import CreateGratitudeEntry from "../features/grtitude/CreateGratitudeEntry";

function Gratitude() {
  return (
    <div className="mt-6">
      <AddGratitude />
      <GratitudeTable />
    </div>
  );
}
export default Gratitude;
