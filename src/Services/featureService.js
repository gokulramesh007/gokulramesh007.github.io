import API from "./axiosService";
import { Strings } from "../constants";

export default {
  fetchFeatures: () => API(Strings.APPLICATION.API.FEATURES)
};
