import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    experience_level: "",
    already_participated: null,
    character_id: null,
  },
  reducers: {
    updateData: (state, action) => {
      state[action.payload.property] = action.payload.value;
    },
  },
});

export const { updateData } = userSlice.actions;

export default userSlice.reducer;
