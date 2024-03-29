import { useState, useEffect } from "react";

import staticApi from "@/services/staticApi";

import SecurityMessage from "./security-message";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChild,
  faVial,
  faGraduationCap,
  faLocationDot,
  faPhone,
  faBook,
  faCalendarDays,
  faArrowRightLong,
  faVenusMars,
  faEnvelope,
  faSchool,
  faChartSimple,
  faBriefcase,
  faPlus,
  faPersonWalkingLuggage,
  faDongSign,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

import swal from "sweetalert2";

import commonConst from "@/constants/commonConst";
import tutorApi from "@/services/tutorApi";

function TutorRegistrationForm() {
  const [data, setData] = useState({
    tutorName: "",
    phone: "",
    email: "",
    gender: 1,
    birthday: new Date(),
    job: "",
    workplaceProvinceId: 0,
    workplaceDistrictId: 0,
    workplaceDetail: "",
    cardId: "",
    cardImageFront: "",
    cardImageBack: "",
    avatar: "",
    school: "",
    major: "",
    graduationYear: new Date().getFullYear(),
    graduationGrade: "",
    graduationImage: "",
    teachingAreaProvinceId: 0,
    teachingAreaDistrictId: 0,
    teachingAreaDetail: "",
    desiredTuition: 0,
    freeTimes: "",
    advantage: "",
    note: "",
  });

  const [error, setError] = useState({
    tutorName: null,
    phone: null,
  });

  const [provinceList, setProvinceList] = useState([]);
  const [workplaceDistrictList, setWorkplaceDistrictList] = useState([
    { id: null, code: null, name: "--- Huyện / quận ---" },
  ]);
  const [teachingAreaDistrictList, setTeachingAreaDistrictListt] = useState([
    { id: null, code: null, name: "--- Huyện / quận ---" },
  ]);
  const [subjectList, setSubjectList] = useState([]);

  useEffect(() => {
    staticApi
      .getProvinceList()
      .then((res) => {
        res.data.unshift({
          id: null,
          code: null,
          name: "--- Tỉnh / thành phố ---",
        });
        setProvinceList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    staticApi
      .getSubjectList()
      .then((res) => {
        res.data.unshift({
          id: null,
          code: null,
          name: "--- Chọn môn học ---",
        });
        setSubjectList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getWorkplaceDistrictList = (provinceId) => {
    staticApi
      .getDistrictList(provinceId)
      .then((res) => {
        res.data.unshift({
          id: null,
          code: null,
          name: "--- Huyện / quận ---",
        });
        setWorkplaceDistrictList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getTeachingAreaDistrictList = (provinceId) => {
    staticApi
      .getDistrictList(provinceId)
      .then((res) => {
        res.data.unshift({
          id: null,
          code: null,
          name: "--- Huyện / quận ---",
        });
        setTeachingAreaDistrictListt(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleName = (e) => {
    setData((prev) => ({ ...prev, tutorName: e.target.value }));
  };
  const handleGender = (e) => {
    setData((prev) => ({ ...prev, gender: e.target.value }));
  };
  const handleBirthday = (e) => {
    setData((prev) => ({ ...prev, birthday: e.target.value }));
  };
  const handlejob = (e) => {
    setData((prev) => ({ ...prev, job: e.target.value }));
  };
  const handlePhone = (e) => {
    setData((prev) => ({ ...prev, phone: e.target.value }));
  };
  const handleEmail = (e) => {
    setData((prev) => ({ ...prev, email: e.target.value }));
  };
  const handleWorkplaceProvinceId = (e) => {
    const provinceSelectedId = e.target.value;
    setData((prev) => ({
      ...prev,
      workplaceProvinceId: provinceSelectedId,
      workplaceDistrictId: 0,
    }));
    getWorkplaceDistrictList(provinceSelectedId);
  };
  const handleWorkplaceDistrictId = (e) => {
    setData((prev) => ({ ...prev, workplaceDistrictId: e.target.value }));
  };
  const handleWorkplaceDetail = (e) => {
    setData((prev) => ({ ...prev, workplaceDetail: e.target.value }));
  };
  const handleCardImageFront = (e) => {
    setData((prev) => ({ ...prev, cardImageFront: e.target.files[0] }));
  };
  const handleCardImageBack = (e) => {
    setData((prev) => ({ ...prev, cardImageFront: e.target.files[0] }));
  };
  const handleSchool = (e) => {
    setData((prev) => ({ ...prev, school: e.target.value }));
  };
  const handleMajor = (e) => {
    setData((prev) => ({ ...prev, major: e.target.value }));
  };
  const handleGraduationYear = (e) => {
    setData((prev) => ({ ...prev, graduationYear: e.target.value }));
  };
  const handleGraduationGrade = (e) => {
    setData((prev) => ({ ...prev, graduationGrade: e.target.value }));
  };
  const handleSubject = (e) => {
    setData((prev) => ({ ...prev, subject: e.target.value }));
  };
  const handleTeachingAreaId = (e) => {
    setData((prev) => ({ ...prev, teachingAreaId: e.target.value }));
  };
  const handleTeachingAreaProvinceId = (e) => {
    const provinceSelectedId = e.target.value;
    setData((prev) => ({
      ...prev,
      teachingAreaProvinceId: provinceSelectedId,
      teachingAreaDistrictId: 0,
    }));
    getTeachingAreaDistrictList(provinceSelectedId);
  };
  const handleTeachingAreaDistrictId = (e) => {
    setData((prev) => ({ ...prev, teachingAreaDistrictId: e.target.value }));
  };
  const handleTeachingAreaDetail = (e) => {
    setData((prev) => ({ ...prev, teachingAreaDetail: e.target.value }));
  };
  const handleTuition = (e) => {
    const replaced = e.target.value.replace(/[,\.]/g, "");
    const tuition = Number(replaced);
    if (tuition || tuition == 0) {
      setData((prev) => ({
        ...prev,
        desiredTuition: tuition,
      }));
    }
  };
  const handleFreeTimes = (e) => {
    setData((prev) => ({ ...prev, freeTimes: e.target.value }));
  };
  const handleAdvantage = (e) => {
    setData((prev) => ({ ...prev, advantage: e.target.value }));
  };
  const handleNote = (e) => {
    setData((prev) => ({ ...prev, note: e.target.value }));
  };

  const submit = () => {
    if (validate()) {
      tutorApi
        .createTutor(data)
        .then((res) => {
          swal.fire({
            title: "Đăng ký thành công!",
            text: "Đơn đăng ký của bạn đã được ghi nhận, chúng tôi sẽ liên hệ đến bạn sớm. Xin cảm ơn! 🥰",
            icon: "success",
            confirmButtonText: "Đóng",
          });
        })
        .catch((err) => {
          if (err.response.data.error == "tutor-regist-ER01") {
            swal.fire({
              title: "Đăng ký thất bại!",
              text: "Số điện thoại đã được đăng ký trước đó, vui lòng liên hệ trung tâm để được hỗ trợ!",
              icon: "error",
              confirmButtonText: "Đóng",
            });
          } else {
            swal.fire({
              title: "Đăng ký thất bại!",
              text: "Hệ thống xảy ra lỗi, xin vui lòng thử lại! 😣",
              icon: "error",
              confirmButtonText: "Đóng",
            });
            console.error(err);
          }
        });
    }
  };

  const validate = () => {
    var errorChecked = {
      tutorName: data.tutorName ? null : "Vui lòng nhập thông tin họ và tên",
      phone:
        data.phone &&
        data.phone.match(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        )
          ? null
          : "Vui lòng nhập đúng thông tin số điện thoại",
    };
    setError(errorChecked);

    return !Object.values(errorChecked).some((value) => value);
  };

  return (
    <div className="section">
      <h1 className="title is-1 is-size-3-touch color-primary">
        Đăng ký làm gia sư
      </h1>
      <h5 className="subtitle is-5">
        Các bạn muốn đăng ký nhận lớp tại trung tâm? Vui lòng điền form đăng ký
        bên dưới và đợi trung tâm liên hệ xét duyệt
      </h5>

      <SecurityMessage />

      <div className="columns is-desktop">
        <div className="field column is-half mb-0">
          <label className="label">
            Họ và tên <span className="has-text-danger">*</span>
          </label>
          <div className="control has-icons-left">
            <input
              className={"input " + (error.tutorName ? "is-danger" : "")}
              type="text"
              placeholder="Họ và tên"
              value={data.tutorName}
              onChange={handleName}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faChild} />
            </span>
          </div>
          {error.tutorName && (
            <p className="help is-danger">{error.tutorName}</p>
          )}
        </div>

        <div className="field column mb-0">
          <label className="label">Giới tính</label>
          <div className="control has-icons-left">
            <div className="select w-100">
              <select
                className="w-100"
                value={data.gender}
                onChange={handleGender}
              >
                {commonConst.GENDER.map(function (gender, i) {
                  return (
                    <option value={gender.id} key={i}>
                      {gender.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faVenusMars} />
            </span>
          </div>
        </div>

        <div className="field column mb-0">
          <label className="label">Ngày sinh</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="date"
              placeholder="Ngày sinh"
              value={data.birthday}
              onChange={handleBirthday}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faCalendarDays} />
            </span>
          </div>
        </div>
      </div>

      <div className="columns is-desktop">
        <div className="field column mb-0">
          <label className="label">
            Số điện thoại <span className="has-text-danger">*</span>
          </label>
          <div className="control has-icons-left">
            <input
              className={"input " + (error.phone ? "is-danger" : "")}
              type="tel"
              placeholder="Số điện thoại"
              value={data.phone}
              onChange={handlePhone}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </div>
          {error.phone && <p className="help is-danger">{error.phone}</p>}
        </div>

        <div className="field column mb-0">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={handleEmail}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
        </div>
      </div>

      <div className="columns is-desktop">
        <div className="field column is-one-third mb-0">
          <label className="label">Công việc chính hiện tại</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Công việc chính hiện tại"
              value={data.job}
              onChange={handlejob}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
          </div>
        </div>
        <div className="field column mb-0">
          <label className="label">Địa chỉ làm việc</label>
          <div className="field is-grouped is-grouped-multiline">
            <div className="control">
              <div className="select">
                <select
                  value={data.workplaceProvinceId}
                  onChange={handleWorkplaceProvinceId}
                >
                  {provinceList.map(function (province, i) {
                    return (
                      <option value={province.id} key={i}>
                        {province.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="control">
              <div className="select">
                <select
                  value={data.workplaceDistrictId}
                  onChange={handleWorkplaceDistrictId}
                >
                  {workplaceDistrictList.map(function (district, i) {
                    return (
                      <option value={district.id} key={i}>
                        {district.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="control is-expanded">
              <input
                value={data.workplaceDetail}
                onChange={handleWorkplaceDetail}
                className="input"
                type="text"
                placeholder="Chi tiết địa chỉ (thành phố/quận/huyện, phường/xã/thị trấn)"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Căn cước công dân</label>
        <div className="field is-grouped">
          <div className="control">
            <div className="file">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  accept="image/*"
                  onChange={handleCardImageFront}
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <FontAwesomeIcon icon={faUpload} />
                  </span>
                  <span className="file-label">Mặt trước…</span>
                </span>
              </label>
            </div>
          </div>
          <div className="control">
            <div className="file">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  accept="image/*"
                  onChange={handleCardImageBack}
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <FontAwesomeIcon icon={faUpload} />
                  </span>
                  <span className="file-label">Mặt sau…</span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="columns is-desktop">
        <div className="field column mb-0">
          <label className="label">Sinh viên / giáo viên trường</label>
          <div className="control has-icons-left">
            <input
              value={data.school}
              onChange={handleSchool}
              className={"input"}
              type="text"
              placeholder="Sinh viên / giáo viên trường"
              maxLength="100"
            ></input>
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faSchool} />
            </span>
          </div>
        </div>
        <div className="field column mb-0">
          <label className="label">Chuyên ngành</label>
          <div className="control has-icons-left">
            <input
              value={data.major}
              onChange={handleMajor}
              className={"input"}
              type="text"
              placeholder="Chuyên ngành"
            ></input>
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faVial} />
            </span>
          </div>
        </div>
      </div>

      <div className="columns is-desktop">
        <div className="field column mb-0">
          <label className="label">Năm tốt nghiệp</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="number"
              placeholder="Năm tốt nghiệp"
              min="1980"
              max={new Date().getFullYear()}
              value={data.graduationYear}
              onChange={handleGraduationYear}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faGraduationCap} />
            </span>
          </div>
        </div>
        <div className="field column mb-0">
          <label className="label">Xếp loại tốt nghiệp</label>
          <div className="control has-icons-left">
            <div className="select w-100">
              <select
                className="w-100"
                value={data.graduationGrade}
                onChange={handleGraduationGrade}
              >
                <option value="Xuất sắc">Xuất sắc</option>
                <option value="Giỏi">Giỏi</option>
                <option value="Khá">Khá</option>
              </select>
            </div>
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faChartSimple} />
            </span>
          </div>
        </div>
        <div className="field column mb-0">
          <label className="label">Ảnh bằng cấp</label>
          <div className="file">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                accept="image/*"
                onChange={handleCardImageBack}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <FontAwesomeIcon icon={faUpload} />
                </span>
                <span className="file-label">Chọn file…</span>
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="columns is-desktop">
        <div className="field column mb-0">
          <label className="label">Đăng ký môn dạy</label>
          <div className="control has-icons-left">
            <div className="select w-100">
              <select
                className="w-100"
                value={data.subject}
                onChange={handleSubject}
              >
                {subjectList.map(function (subject, i) {
                  return (
                    <option value={subject.id} key={i}>
                      {subject.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faBook} />
            </span>
          </div>
        </div>
        <div className="field column mb-0">
          <label className="label">Học phí mong muốn</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="X.000.000"
              value={data.desiredTuition.toLocaleString()}
              onChange={handleTuition}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faDongSign} />
            </span>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="field mb-0">
          <label className="label">Khu vực dạy</label>
          <div className="field is-grouped is-grouped-multiline">
            <div className="control">
              <div className="select">
                <select
                  value={data.teachingAreaProvinceId}
                  onChange={handleTeachingAreaProvinceId}
                >
                  {provinceList.map(function (province, i) {
                    return (
                      <option value={province.id} key={i}>
                        {province.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="control">
              <div className="select">
                <select
                  value={data.teachingAreaDistrictId}
                  onChange={handleTeachingAreaDistrictId}
                >
                  {teachingAreaDistrictList.map(function (district, i) {
                    return (
                      <option value={district.id} key={i}>
                        {district.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="control is-expanded">
              <input
                value={data.teachingAreaDetail}
                onChange={handleTeachingAreaDetail}
                className="input"
                type="text"
                placeholder="Chi tiết địa chỉ (thành phố/quận/huyện, phường/xã/thị trấn)"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Thời gian rảnh</label>
        <div className="control">
          <textarea
            value={data.freeTimes}
            onChange={handleFreeTimes}
            className="textarea"
            placeholder="Thời gian rảnh"
            maxLength="500"
          ></textarea>
        </div>
      </div>
      <div className="field">
        <label className="label">Ưu điểm</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Ưu điểm"
            value={data.advantage}
            onChange={handleAdvantage}
            maxLength="500"
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Ghi chú</label>
        <div className="control">
          <textarea
            value={data.note}
            onChange={handleNote}
            className="textarea"
            placeholder="Ghi chú"
            maxLength="500"
          ></textarea>
        </div>
      </div>

      <div className="field mt-6">
        <div className="control has-text-centered">
          <button className="button is-primary" onClick={submit}>
            <span>Đăng ký</span>
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faArrowRightLong} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TutorRegistrationForm;
