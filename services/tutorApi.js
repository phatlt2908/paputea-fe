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

  requestClass(data) {
    return axios.post(apiConst.REQUEST_CLASS, data);
  }

  getTutorList(data) {
    return axios.post(apiConst.TUTOR_LIST, data);
  }
}

export default new classApi();
