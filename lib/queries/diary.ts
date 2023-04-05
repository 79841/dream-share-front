import axios, { AxiosHeaders } from "axios";
import Diary from "@/interfaces/Diary.interface";
import authWrapper from "../utils/authQuery";

const getAllDiaries = authWrapper(
  async (page: Number, size: Number, headers?: AxiosHeaders) => {
    const {
      data: { content },
    } = await axios.get("/api/v1/dream-diary", {
      params: { page, size },
      headers: headers || {},
    });
    return content;
  }
);

const getDiaryDetail = authWrapper(
  async (id: string, headers?: AxiosHeaders) => {
    const { data } = await axios.get(`/api/v1/dream-diary/${id}`, {
      headers: headers || {},
    });
    return data;
  }
);

const createDiary = authWrapper(
  async (diary: Diary, headers?: AxiosHeaders) => {
    const { data } = await axios.post("/api/v1/dream-diary", diary, {
      headers: headers || {},
    });
    return data;
  }
);

const editDiary = authWrapper(async (diary: Diary, headers?: AxiosHeaders) => {
  const { data } = await axios.put(`/api/v1/dream-diary/${diary.id}`, diary, {
    headers: headers || {},
  });
  return data;
});

const removeDiary = authWrapper(async (id: number, headers?: AxiosHeaders) => {
  const { data } = await axios.delete(`/api/v1/dream-diary/${id}`, {
    headers: headers || {},
  });
  return data;
});

export { getAllDiaries, getDiaryDetail, createDiary, editDiary, removeDiary };
