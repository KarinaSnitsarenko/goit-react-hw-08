import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const fetchContacts = async () => {
  const data = await axios.get("/contacts");
  return data;
};

export const addContact = async (newContact) => {
  const data = await axios.post("/contacts", newContact);
  return data;
};

export const deleteContact = async (contactId) => {
  const data = await axios.delete(`/contacts/${contactId}`);
  return data;
};
