import { fetchWithToken } from "./fetch";

export const saveEvent = async (data) => {
  const resp = await fetchWithToken("events", data, "POST");
  const body = await resp.json();
  return body;
};


export const getEventList = async () => {
  const resp = await fetchWithToken("events", {}, "GET");
  const body = await resp.json();
  return body;
};
