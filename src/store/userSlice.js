import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    experience_level: "",
    already_participated: false,
    character_id: null,
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePhone: (state, action) => {
      state.phone = action.payload;
    },
    updateDateOfBirth: (state, action) => {
      state.date_of_birth = action.payload;
    },
    updateExperienceLevel: (state, action) => {
      state.experience_level = action.payload;
    },
    updateAlreadyParticipated: (state, action) => {
      state.already_participated = action.payload;
    },
    updateCharacterId: (state, action) => {
      state.character_id = action.payload;
    },
  },
});

export const {
  updateName,
  updateEmail,
  updatePhone,
  updateDateOfBirth,
  updateExperienceLevel,
  updateAlreadyParticipated,
  updateCharacterId,
} = userSlice.actions;

export default userSlice.reducer;
