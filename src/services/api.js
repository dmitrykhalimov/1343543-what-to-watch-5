import axios from "axios";
import {ErrorMessage} from "../const";

const BACKEND_URL = `https://5.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    switch (response.status) {
      case HttpCode.UNAUTHORIZED:
        onUnauthorized();
        break;
      case HttpCode.BAD_REQUEST:
        throw Error(ErrorMessage.BAD_REQUEST);
      case HttpCode.NOT_FOUND:
        throw Error(ErrorMessage.NOT_FOUND);
      default:
        throw Error(ErrorMessage.OTHER);
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
