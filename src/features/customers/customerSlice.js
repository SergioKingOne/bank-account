import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    createCustomer(state, { payload }) {
      state.fullName = payload.fullName;
      state.nationalId = payload.nationalId;
      state.createdAt = payload.createdAt;
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;
// export default function customerReducer(state = initialState, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       console.log(action.payload.fullName);
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

// store.dispatch({ type: "account/deposit", payload: 500 });

// export function createCustomer(fullName, nationalId) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalId, createdAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullName) {
//   return { type: "account/updateName", payload: fullName };
// }

export default customerSlice.reducer;
