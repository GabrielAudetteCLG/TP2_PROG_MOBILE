import { db } from "../config/firebaseConfig";
import { ref, push, set, child, get, remove, onValue } from "firebase/database";

const DB_COLLECTION = "tp1";

export const login = async (email, password) => {
  const users = await getUsers();

  let user = users.filter((user) => user.email == email)[0];

  if (user) return user;

  user = await addUser(email);
  return user;
};

export const getUsers = async () => {
  const users = [];

  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, DB_COLLECTION));
    if (snapshot.exists()) {
      const users_data = snapshot.val();
      Object.keys(users_data).forEach((user_key) => {
        users.push({
          id: user_key,
          ...users_data[user_key],
        });
      });
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error getting users: ", error);
  }

  return users;
};

export const addUser = async (email) => {
  try {
    const tp1_ref = ref(db, DB_COLLECTION);
    const new_user_ref = push(tp1_ref);
    const new_user = {
      email,
      displayName: email.split("@")[0],
      created: new Date().toLocaleDateString(),
    };
    set(new_user_ref, new_user);

    new_user.id = new_user_ref.key;
    return new_user;
  } catch (e) {
    console.error("Error adding user: ", e);
  }
};
