/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Filter from "../../ui/Filter";
import FilterForSmall from "../../ui/FilterForSmall";
import SortBy from "../../ui/SortBy";
import SortByForSmall from "../../ui/SortByForSmall";

function ToDoOperations() {
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
  console.log("width in operation", width);
  return (
    <div className="flex justify-between px-2">
      {width > 767 ? (
        <>
          <Filter
            filterField="status"
            options={[
              { value: "all", label: "All" },
              { value: "new", label: "New" },
              { value: "in-progress", label: "Progress" },
              { value: "done", label: "Done" },
            ]}
          />
          <SortBy
            options={[
              { value: "created_at-desc", label: "Created - recent" },
              { value: "created_at-asc", label: "Created - earlier " },
              {
                value: "priority-desc",
                label: "Sort by priority (high first)",
              },
              { value: "priority-asc", label: "Sort by priority (low first)" },
            ]}
          />
        </>
      ) : (
        <>
          <FilterForSmall
            filterField="status"
            className="mx-2"
            options={[
              { value: "all", label: "All" },
              { value: "new", label: "New" },
              { value: "in-progress", label: "Progress" },
              { value: "done", label: "Done" },
            ]}
          />
          <SortByForSmall
            options={[
              { value: "created_at-desc", label: "Latest" },
              { value: "created_at-asc", label: "Earlier " },
              {
                value: "priority-desc",
                label: "High Priority",
              },
              { value: "priority-asc", label: "Low Priority" },
            ]}
          />
        </>
      )}
    </div>
  );
}
export default ToDoOperations;
