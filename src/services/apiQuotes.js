import supabase from "./supabase";

export async function getKeyword() {
  let { data: keyword, error } = await supabase.from("keywords").select("*");

  if (error) {
    console.Error(error);
    throw new Error("Gratitude entry could not be read");
  }

  return keyword;
}
