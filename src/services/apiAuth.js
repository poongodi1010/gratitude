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

export async function login(data) {
  const { data: loginData, error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
  if (error) throw new Error(error.message);

  return loginData;
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
    if (email) {
      updateData = {
        email: email,
        data: {
          fullName,
        },
      };
    } else {
      updateData = {
        data: {
          fullName,
        },
      };
    }
  } else {
    updateData = {
      email: email,
    };
  }

  if (password && !email && !fullName) {
    updateData = { password: password };
  }

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);

  return data;
}
