import axios from "@/configs/axios";
import apiConst from "../constants/apiConst";

class classApi {
  createTutor(data) {
    return axios.post(apiConst.CREATE_TUTOR, data);
  }
}

export default new classApi();
