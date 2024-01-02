import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createAccount, getUserData, getUserTransactions, loginUser, updateBalance } from "../actions/user.action";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: {},
  transactions: [],
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.fulfilled, (state, action) => {
        toast.success("Account Creation succesful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light",
        });
      })
      .addCase(createAccount.rejected, (state, action) => {
        toast.error("Failed to create account", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light",
        });
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        toast.success("Log in successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light",
        });
        // state.user = { ...action.payload.result };
        state.isLoggedIn= true
      })
      .addCase(getUserTransactions.fulfilled, (state, action) => {
        toast.success("Transactions Fetched", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light",
        });
        state.transactions =  [...action.payload];
        state.isLoggedIn= true
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        toast.success("User details fetched", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light",
        });
        state.user = { ...action.payload[0] };
        // state.isLoggedIn= true
      })
      .addCase(updateBalance.fulfilled, (state, action) => {
        toast.success("User details fetched", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light",
        });
        state.user = { ...action.payload };
        // state.isLoggedIn= true
      })
  },
});

export default userSlice.reducer;
