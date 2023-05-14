import axios from "@/configs/axios";
import apiConst from "../constants/apiConst";

class staticApi {
  getProvinceList() {
    return axios.get(apiConst.PROVINCE_LIST);
  }

  getDistrictList(provinceId) {
    return axios.get(apiConst.DISTRICT_LIST, {
      params: { provinceId: provinceId },
    });
  }

  getGradeList() {
    return axios.get(apiConst.GRADE_LIST);
  }

  getSubjectList() {
    return axios.get(apiConst.SUBJECT_LIST);
  }
}

export default new staticApi();
