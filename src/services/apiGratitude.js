import { getUserId } from "../utils/constants";
import supabase from "./supabase";

export async function getGratitude() {
  const user = await getUserId();

  let { data: gratitude, error } = await supabase
    .from("gratitude")
    .select("*")
    .eq("user_id", user.id);
  if (error) {
    console.error(error);
    throw new Error("Gratitude entry could not be read");
  }

  return gratitude;
}

export async function createEditGratitude(newData, id) {
  const user = await getUserId();

  let query = supabase.from("gratitude");

  if (!id) query = query.insert([{ ...newData, user_id: user.id }]);

  if (id)
    query = query
      .update([{ ...newData }])
      .eq("id", id)
      .order("created_at", { ascending: true });

  const { data, error } = await query.select().single();

  if (error) {
    console.Error(error);
    throw new Error("Gratitude entry could not be inserted");
  }

  return data;
}

export async function deleteGratitude(id) {
  const { data, error } = await supabase
    .from("gratitude")
    .delete()
    .eq("id", id);

  if (error) {
    console.Error(error);
    throw new Error("Gratitude entry  could not be deleted");
  }
  return data;
}
