import supabase from "./supabase";

export async function getKeyword() {
  let { data: keyword, error } = await supabase.from("keywords").select("*");
  console.log("data", keyword);
  if (error) {
    console.Error(error);
    throw new Error("Gratitude entry could not be read");
  }

  return keyword;
}
