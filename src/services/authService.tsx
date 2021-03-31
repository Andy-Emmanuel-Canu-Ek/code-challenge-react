import { authLogout } from "../actions/authActions";
import { fetchWitoutToken, fetchWithToken } from "./fetch";

export const login = async (data) => {
  const resp = await fetchWitoutToken("auth", data, "POST");
  const body = await resp.json();
  if (body.ok) {
    localStorage.setItem("token", body.token);
    localStorage.setItem("user_id", body.user_id);
  }
  return body;
};

export const register = async (data) => {
  const resp = await fetchWitoutToken("auth/new", data, "POST");
  const body = await resp.json();
  return body;
};

export const getUserList = async () => {
  const resp = await fetchWithToken("auth/user_list", {}, "GET");
  const body = await resp.json();
  return body;
};

export const deleteUserId = async (id) => {
  const resp = await fetchWithToken("auth/" + id, {}, "DELETE");
  const body = await resp.json();
  return body;
};

export const logout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(authLogout());
  };
};
