import axios from "@/configs/axios";
import apiConst from "../constants/apiConst";

class classApi {
  createClass(data) {
    return axios.post(apiConst.CREATE_CLASS, data);
  }
}

export default new classApi();
