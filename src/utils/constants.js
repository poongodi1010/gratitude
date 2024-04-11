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
// let height;
// let width;
// // Insert values on load of page
// console.log("inner", window.innerHeight);
// window.onload = function () {
//   console.log("inside onload");
//   height.innerHTML = window.innerHeight;
//   width.innerHTML = window.innerWidth;
// };

//Change values when window is resized
// window.onresize = function () {
//   // Setting the current height & width
//   // to the elements
//   console.log("inisde onresize");
//   console.log("window.innerwidth", window.innerWidth);
//   height = window.innerHeight;
//   width = window.innerWidth;
//   console.log("h, w", height, width);
// };
// export { height, width };
