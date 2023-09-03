import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  }
};

const formSlice = createSlice({
  name: "testForm",
  initialState,
  reducers: {
    updateForm: (state, { payload }) => {
      state.formData = {
        ...state.formData,
        ...payload
      };
      alert(
        `User data is: {
                          first_name: ${state.formData.firstName},
                          last_name: ${state.formData.firstName},
                          email: ${state.formData.email},
                          nmessage: ${state.formData.message}
                        }`
      );
    }
  }
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
