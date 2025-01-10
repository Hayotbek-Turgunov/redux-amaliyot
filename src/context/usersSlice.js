import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: JSON.parse(localStorage.getItem("users")) || [],
  },

  reducers: {
    addToUsers(state, action) {
      state.value = [...state.value, action.payload];
      localStorage.setItem("users", JSON.stringify(state.value));
    },

    removeFormUsers(state, action) {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addToUsers, removeFormUsers } = userSlice.actions;
export default userSlice.reducer;
