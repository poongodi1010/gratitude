import supabase from "./supabase";

export async function getAffirmations() {
  const { data, error } = await supabase
    .from("random_affirmations")
    .select("*");
  if (error) {
    console.error(error);
    throw new Error("Affirmations could not be loaded");
  }

  return data;
}
