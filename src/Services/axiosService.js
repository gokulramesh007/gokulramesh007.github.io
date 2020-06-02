import axios from "axios";

const api = async (url, params) => {
  try {
    params = params || {};
    let response = await axios.get(url, params);
    return response;
  } catch (error) {
    console.log("Network error : ", error);
    return error.message;
  }
};

export default api;
