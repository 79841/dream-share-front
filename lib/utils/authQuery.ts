import { AxiosHeaders, AxiosRequestHeaders } from "axios";

const authWrapper = (fn: Function) => {
  return async (...rest: any[]) => {
    const headers: AxiosRequestHeaders = new AxiosHeaders();
    const token = sessionStorage.getItem("dream-share")
      ? JSON.parse(sessionStorage.getItem("dream-share") as string).session
      : "No Authorized";

    headers.set("Authorization", `Bearer ${token}`);
    return fn(...rest, headers);
  };
};

export default authWrapper;
