import { fetchWitoutToken, fetchWithToken } from "./fetch";

export const login = async (email, password) => {
  const resp = await fetchWitoutToken("auth", { email, password }, "POST");
  const body = await resp.json();
  if(body.ok){
      localStorage.setItem('token', body.token)
  }
  return body;
};

export const register = async (data) => {
    const resp = await fetchWitoutToken("auth/new", data, "POST");
    const body = await resp.json();
    return body;
  };
  