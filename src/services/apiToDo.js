import supabase from "./supabase";
import { PAGE_SIZE, getUserId } from "../utils/constants";

export async function getToDoLists({ filter, sortBy, page }) {
  const user = await getUserId();

  let query = supabase
    .from("to_do")
    .select("*", {
      count: "exact",
    })
    .eq("user_id", user.id);

  //Filter
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  //sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    console.error(error);
    throw new Error("ToDo List could not be loaded");
  }
  return { data, count };
}

export async function getToDoList(id) {
  let { data: toDo, error } = await supabase
    .from("to_do")
    .select("*")
    .eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("todolist by id  entry could not be read");
  }

  return toDo;
}
export async function getToDoListByDate(date) {
  const user = await getUserId();

  let { data: list, error } = await supabase
    .from("to_do")
    .select("*")
    .eq("date", date)
    .eq("user_id", user.id);
  if (error) {
    console.error(error);
    throw new Error("todo list by date could not be read");
  }

  return list;
}

export async function addToDoList(newData) {
  const user = await getUserId();

  const { data, error } = await supabase
    .from("to_do")
    .insert([{ ...newData, user_id: user.id }])
    .select()
    .single();

  if (error) {
    console.Error(error);
    throw new Error("ToDo entry could not be added");
  }

  return data;
}

export async function editToDoStatus(newStatus, id) {
  const { data, error } = await supabase
    .from("to_do")
    .update([{ status: newStatus.status }])
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Status is not changing");
  }
  return data;
}

export async function deleteToDo(id) {
  const { data, error } = await supabase.from("to_do").delete().eq("id", id);

  if (error) {
    console.Error(error);
    throw new Error("To do  entry  could not be deleted");
  }
  return data;
}
