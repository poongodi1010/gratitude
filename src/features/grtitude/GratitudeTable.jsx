import { useGratitude } from "./useGratitude";
import GratitudeRow from "./GratitudeRow";
import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";

function GratitudeTable() {
  const { isLoading, gratitude } = useGratitude();

  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <div className="grid grid-rows-1 items-center transition-none">
        {/* <header className="p-1">
          <div></div>
        </header> */}
        <section className="my-2 ">
          {gratitude.map((grat) => (
            <GratitudeRow grat={grat} key={grat.id} />
          ))}
        </section>
      </div>
    </Menus>
  );
}

export default GratitudeTable;
