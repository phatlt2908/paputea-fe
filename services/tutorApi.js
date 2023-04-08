import axios from "@/configs/axios";
import apiConst from "../constants/apiConst";

class classApi {
  createTutor(data) {
    return axios.post(apiConst.CREATE_TUTOR, data);
  }

  checkTutorPhone(phone) {
    return axios.get(apiConst.CHECK_TUTOR_PHONE, {
      params: { phone: phone },
    });
  }
}

export default new classApi();
