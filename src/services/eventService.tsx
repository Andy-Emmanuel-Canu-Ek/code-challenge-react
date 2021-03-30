import { fetchWithToken } from "./fetch";

export const saveEvent = async (data) => {
  let resp;
  if(data.id !== 0){
    resp = await fetchWithToken("events/" + data.id, data, "PUT");
  }else{
    resp = await fetchWithToken("events", data, "POST");
  }

  const body = await resp.json();
  return body;
};

export const deleteEvent = async (id) => {
  const resp = await fetchWithToken("events/" + id, {}, "DELETE");
  const body = await resp.json();
  return body;
};


export const getEventList = async () => {
  const resp = await fetchWithToken("events", {}, "GET");
  const body = await resp.json();
  return body;
};
