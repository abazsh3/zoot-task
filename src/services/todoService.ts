// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo } from "./types";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3004/" }),
  tagTypes: ["get-todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo, void>({
      query: () => "/todos",
      providesTags: ["get-todos"],
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;
