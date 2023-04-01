import axios from "@/configs/axios";
import apiConst from "../constants/apiConst";

class classApi {
  createClass(data) {
    return axios.post(apiConst.CREATE_CLASS, data);
  }

  createCenterClass(data) {
    return axios.post(apiConst.CREATE_CENTER_CLASS, data);
  }

  getClassList(data) {
    return axios.post(apiConst.CLASS_LIST, data);
  }
}

export default new classApi();
