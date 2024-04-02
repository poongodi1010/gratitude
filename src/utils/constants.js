import supabase from "../services/supabase";

export const PAGE_SIZE = 10;

export async function getUserId() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data: user } = await supabase.auth.getUser();
  console.log("user", user.user);
  return user.user;
}
