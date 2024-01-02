import userService from "../service/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorMessage } from "../../helper/errormessage";

export const createAccount = createAsyncThunk(
  "auth/createAccount",
  async (form, thunkAPI) => {
    try {
      const data = await userService.createAccount(form);
      return data;
    } catch (err) {
      const message = errorMessage(err);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (form, thunkAPI) => {
    try {
      const data = await userService.loginUser(form);
      return data;
    } catch (err) {
      const message = errorMessage(err);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getUserData = createAsyncThunk(
  "auth/userData",
  async (form, thunkAPI) => {
    try {
      const data = await userService.getUserData(form);
      return data;
    } catch (err) {
      const message = errorMessage(err);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getUserTransactions = createAsyncThunk(
  "auth/userTransactions",
  async (form, thunkAPI) => {
    try {
      const data = await userService.getTransactions(form);
      return data;
    } catch (err) {
      const message = errorMessage(err);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const updateBalance = createAsyncThunk(
  "auth/updateBalance",
  async (form, thunkAPI) => {
    try {
      const data = await userService.updateBalance(form);
      return data;
    } catch (err) {
      const message = errorMessage(err);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const makeTransfer = createAsyncThunk(
  "auth/makeTransfer",
  async (form, thunkAPI) => {
    try {
      const data = await userService.makeTransfer(form);
      return data;
    } catch (err) {
      const message = errorMessage(err);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
