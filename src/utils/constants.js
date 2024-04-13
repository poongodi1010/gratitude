import supabase from "../services/supabase";

export const PAGE_SIZE = 10;

export async function getUserId() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data: user } = await supabase.auth.getUser();

  return user.user;
}

export function capitalCheck(word) {
  return word.charAt(0) === word.charAt(0).toUpperCase();
}
