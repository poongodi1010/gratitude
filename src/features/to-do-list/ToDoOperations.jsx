import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ToDoOperations() {
  return (
    <div className="flex justify-between">
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
          { value: "created_at-desc", label: "Created - recent first" },
          { value: "created_at-asc", label: "Created - earlier first" },
          {
            value: "priority-desc",
            label: "Sort by priority (high first)",
          },
          { value: "priority-asc", label: "Sort by priority (low first)" },
        ]}
      />
    </div>
  );
}
export default ToDoOperations;
