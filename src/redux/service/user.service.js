import makeNetworkCall from "../../helper/axios-call";

const createAccount = async (form) => {
  const response = await makeNetworkCall({
    method: "POST",
    url: "/user/signup",
    body: form,
  });
  const token = response.headers["authorization"];
  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};

const loginUser = async (form) => {
  const response = await makeNetworkCall({
    method: "POST",
    url: "/user/signin",
    body: form,
  });
  const token = response.headers["authorization"];
  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};
const getUserData = async (form) => {
  const response = await makeNetworkCall({
    method: "POST",
    url: "/user/dashboard",
    body: form,
  });
  const token = response.headers["authorization"];
  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};
const getTransactions = async (form) => {
  const response = await makeNetworkCall({
    method: "POST",
    url: "/user/getTransactions",
    body: form,
  });
  const token = response.headers["authorization"];
  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};
const updateBalance = async (form) => {
  const response = await makeNetworkCall({
    method: "POST",
    url: "/user/updateBalance",
    body: form,
  });
  const token = response.headers["authorization"];
  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};

const makeTransfer = async (form) => {
  const response = await makeNetworkCall({
    method: "POST",
    url: "/user/transfer",
    body: form,
  });
  const token = response.headers["authorization"];
  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};

const userService = {
  createAccount,
  loginUser,
  getUserData,
  getTransactions,
  updateBalance,
  makeTransfer,
};

export default userService;
