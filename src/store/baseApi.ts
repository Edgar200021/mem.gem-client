import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { TAG_TYPES } from "../const/redux";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: () => ({}),
  tagTypes: TAG_TYPES,
});
