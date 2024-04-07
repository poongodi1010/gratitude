import supabase from "./supabase";

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
        // password,
      },
    },
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  console.log("user details", email, password);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ fullName, email, password }) {
  let updateData;

  if (fullName) {
    console.log("11");
    if (email) {
      console.log("12");
      updateData = {
        email: email,
        data: {
          fullName,
        },
      };
    } else {
      console.log("13");
      updateData = {
        data: {
          fullName,
        },
      };
    }
  } else {
    console.log("14");
    updateData = {
      email: email,
    };
  }

  // if (fullName && email) {
  //   console.log("inside fullnme 1");
  //   updateData = {
  //     email: email,
  //     data: {
  //       fullName,
  //     },
  //   };
  // } else {
  //   console.log("inside fullnme 2");
  //   if (fullName) {
  //     console.log("inside fullnme 3");
  //     updateData = {
  //       data: {
  //         fullName,
  //       },
  //     };
  //   } else {
  //     {
  //       console.log("inside fullnme 4");
  //       updateData = { email: email };
  //     }
  //   }
  // }

  console.log("new password", password);
  if (password && !email && !fullName) {
    console.log("15");
    updateData = { password: password };
  }
  console.log("updatedata is", updateData);
  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);

  return data;
}
