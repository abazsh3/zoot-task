// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo } from "./types";
import { url } from "inspector";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3004/" }),
  tagTypes: ["get-todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "/todos",
      providesTags: ["get-todos"],
    }),
    deleteTodo: builder.mutation<unknown, number>({
      query: (id) => ({ url: `/todos/${id}`, method: "DELETE" }),
      invalidatesTags: ["get-todos"],
    }),
    editTodo: builder.mutation<unknown, Todo>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        body: todo,
        method: "PUT",
      }),
      invalidatesTags: ["get-todos"],
    }),
  }),
});

export const { useGetTodosQuery, useDeleteTodoMutation, useEditTodoMutation } =
  todoApi;
