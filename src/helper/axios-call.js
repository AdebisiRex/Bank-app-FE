import axios from "axios";

const BASE_URL = process.env.REACT_APP_ENDPOINT;

const makeNetworkCall = async ({
  url,
  method = "get",
  headers,
  body,
  baseUrl,
}) => {
  const token = localStorage.getItem("token");
  const HEADERS = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `${token}`,
  };

  if (!url) {
    throw "Url is Invalid";
  }
  if (!method) {
    throw "Method is Invalid";
  }

  const args = {
    method: method.toLowerCase(),
  };
  const axiosInstance = axios.create({
    baseURL: baseUrl ? baseUrl : BASE_URL,
    headers: { ...HEADERS, ...headers },
  });

  let requestBody = await axiosInstance[args.method](url, body)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
  return requestBody;
};

export default makeNetworkCall;
