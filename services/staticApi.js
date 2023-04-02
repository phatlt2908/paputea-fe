import axios from "@/configs/axios";
import apiConst from "../constants/apiConst";

class staticApi {
  getAddressList() {
    return axios.get(apiConst.ADDRESS_LIST);
  }

  getGradeList() {
    return axios.get(apiConst.GRADE_LIST);
  }

  getSubjectList() {
    return axios.get(apiConst.SUBJECT_LIST);
  }
}

export default new staticApi();