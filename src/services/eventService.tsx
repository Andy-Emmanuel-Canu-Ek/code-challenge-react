import { fetchWitoutToken, fetchWithToken } from "./fetch";

export const getEventList = async () => {
  const resp = await fetchWithToken("events", {}, "GET");
  const body = await resp.json();
  return body;
};
