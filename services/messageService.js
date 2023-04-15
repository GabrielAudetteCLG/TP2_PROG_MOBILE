import { db } from "../config/firebaseConfig";
import { ref, push, set, child, get, remove, onValue } from "firebase/database";

const DB_COLLECTION = "tp1";

export const sendMessage = async (userdata, recipientData, message) => {
  try {
    const messages = await getMessages(userdata.id, recipientData.id);
    messages.push({
      content: message,
      date: new Date().toISOString(),
    });

    const messages_ref = ref(
      db,
      `${DB_COLLECTION}/${userId}/conversations/${recipientId}`
    );
    const nes_message_ref = push(messages_ref);
    const new_message = {
      name: userInfos[0].value,
      email: userInfos[1].value,
      password: userInfos[2].value,
      phone: userInfos[4].value,
    };

    set(nes_message_ref, new_message);

    new_message.id = nes_message_ref.key;
    return new_message;
  } catch (e) {
    console.error("Error adding user: ", e);
  }
};

export const getMessages = async (userId, recipientId) => {
  try {
    const db_ref = ref(db);
    const snapshot = await get(
      child(db_ref, `${DB_COLLECTION}/${userId}/conversations/${recipientId}`)
    );

    if (snapshot.exists()) {
      return messages;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error getting messages: ", error);
  }

  return [];
};
