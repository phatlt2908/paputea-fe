import { useState, useEffect } from "react";
import staticApi from "@/services/staticApi";
import classApi from "@/services/classApi";

import SecurityMessage from "./security-message";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import swal from "sweetalert2";

function ClassRegistrationForm() {
  const [data, setData] = useState({
    registerName: "",
    addressId: 0,
    addressDetail: "",
    registerPhone: "",
    gradeId: 0,
    subjectId: 0,
    sessionsPerWeek: 0,
    openingDay: new Date(),
    note: "",
  });

  const [error, setError] = useState({
    registerName: null,
    address: null,
    registerPhone: null,
    gradeId: null,
    subjectId: null,
    sessionsPerWeek: null,
    openingDay: null,
  });

  const [addressList, setAddressList] = useState([]);
  const [gradeList, setGradeList] = useState([]);
  const [subjectList, setSubjectList] = useState([]);

  useEffect(() => {
    staticApi
      .getAddressList()
      .then((res) => {
        res.data.unshift({ id: null, code: null, name: "--- Khu vực ---" });
        setAddressList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    staticApi
      .getGradeList()
      .then((res) => {
        res.data.unshift({ id: null, code: null, name: "--- Lớp ---" });
        setGradeList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    staticApi
      .getSubjectList()
      .then((res) => {
        res.data.unshift({ id: null, code: null, name: "--- Môn học ---" });
        setSubjectList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleRegisterName = (e) => {
    setData((prev) => ({ ...prev, registerName: e.target.value }));
  };
  const handleAddressId = (e) => {
    setData((prev) => ({ ...prev, addressId: e.target.value }));
  };
  const handleAddressDetail = (e) => {
    setData((prev) => ({ ...prev, addressDetail: e.target.value }));
  };
  const handleRegisterPhone = (e) => {
    setData((prev) => ({ ...prev, registerPhone: e.target.value }));
  };
  const handleGrade = (e) => {
    setData((prev) => ({ ...prev, gradeId: e.target.value }));
  };
  const handleSubject = (e) => {
    setData((prev) => ({ ...prev, subjectId: e.target.value }));
  };
  const handleSessionsPerWeek = (e) => {
    setData((prev) => ({ ...prev, sessionsPerWeek: e.target.value }));
  };
  const handleOpeningDay = (e) => {
    setData((prev) => ({ ...prev, openingDay: e.target.value }));
  };
  const handleNote = (e) => {
    setData((prev) => ({ ...prev, note: e.target.value }));
  };

  const submit = () => {
    if (validate()) {
      classApi
        .createClass(data)
        .then((res) => {
          swal.fire({
            title: "Đăng ký thành công!",
            text: "Đơn đăng ký của bạn đã được ghi nhận, chúng tôi sẽ liên hệ đến bạn sớm. Xin cảm ơn! 🥰",
            icon: "success",
            confirmButtonText: "Đóng",
          });
        })
        .catch((err) => {
          swal.fire({
            title: "Đăng ký thất bại!",
            text: "Hệ thống xảy ra lỗi, xin vui lòng thử lại! 😣",
            icon: "error",
            confirmButtonText: "Đóng",
          });
          console.error(err);
        });
    }
  };

  const validate = () => {
    setError((prev) => ({
      ...prev,
      registerName: data.registerName
        ? null
        : "Vui lòng nhập thông tin họ và tên",
      address:
        data.addressId && data.addressDetail
          ? null
          : "Vui lòng chọn và nhập thông tin địa chỉ",
      registerPhone:
        data.registerPhone &&
        data.registerPhone.match(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        )
          ? null
          : "Vui lòng nhập đúng thông tin số điện thoại",
      gradeId: data.gradeId ? null : "Vui lòng chọn lớp",
      subjectId: data.subjectId ? null : "Vui lòng chọn môn học",
      sessionsPerWeek: data.sessionsPerWeek
        ? null
        : "Vui lòng nhập số buổi học/tuần",
      openingDay: data.openingDay
        ? null
        : "Vui lòng nhập thời gian bắt đầu học",
    }));

    for (let key in error) {
      if (error[key]) {
        return false;
      }
    }

    return true;
  };

  return (
    <div className="section">
      <h1 className="title is-1 is-size-3-touch color-primary">
        Đăng ký tìm gia sư, giáo viên
      </h1>

      <SecurityMessage />

      <div className="columns is-desktop">
        <div className="field column mb-0">
          <label className="label">Họ và tên</label>
          <div className="control has-icons-left">
            <input
              className={"input " + (error.registerName ? "is-danger" : "")}
              type="text"
              placeholder="Họ và tên"
              value={data.registerName}
              onChange={handleRegisterName}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faChild} />
            </span>
          </div>
          {error.registerName && (
            <p className="help is-danger">{error.registerName}</p>
          )}
        </div>

        <div className="field column mb-0">
          <label className="label">Số điện thoại</label>
          <div className="control has-icons-left">
            <input
              className={"input " + (error.registerPhone ? "is-danger" : "")}
              type="text"
              placeholder="Số điện thoại"
              value={data.registerPhone}
              onChange={handleRegisterPhone}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </div>
          {error.registerPhone && (
            <p className="help is-danger">{error.registerPhone}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label className="label">Địa chỉ</label>
        <div className="field has-addons">
          <div className="control has-icons-left">
            <div className={"select " + (error.address ? "is-danger" : "")}>
              <select value={data.addressId} onChange={handleAddressId}>
                {addressList.map(function (address, i) {
                  return (
                    <option value={address.id} key={i}>
                      {address.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
          </div>
          <p className="control is-expanded">
            <input
              value={data.addressDetail}
              onChange={handleAddressDetail}
              className={"input " + (error.address ? "is-danger" : "")}
              type="text"
              placeholder="Chi tiết địa chỉ (thành phố/quận/huyện, phường/xã/thị trấn)"
            ></input>
          </p>
        </div>
        {error.address && <p className="help is-danger">{error.address}</p>}
      </div>

      <div className="columns is-desktop">
        <div className="field column mb-0">
          <label className="label">Học sinh lớp</label>
          <div className="control has-icons-left">
            <div
              className={"select w-100 " + (error.gradeId ? "is-danger" : "")}
            >
              <select
                className="w-100"
                value={data.gradeId}
                onChange={handleGrade}
              >
                {gradeList.map(function (grade, i) {
                  return (
                    <option value={grade.id} key={i}>
                      {grade.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faGraduationCap} />
            </span>
          </div>
          {error.gradeId && <p className="help is-danger">{error.gradeId}</p>}
        </div>

        <div className="field column mb-0">
          <label className="label">Đăng ký môn học</label>
          <div className="control has-icons-left">
            <div
              className={"select w-100 " + (error.subjectId ? "is-danger" : "")}
            >
              <select
                className="w-100"
                value={data.subjectId}
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
          {error.subjectId && (
            <p className="help is-danger">{error.subjectId}</p>
          )}
        </div>
      </div>

      <div className="columns is-desktop">
        <div className="field column mb-0">
          <label className="label">Số buổi học/tuần</label>
          <div className="control has-icons-left">
            <input
              className={"input " + (error.sessionsPerWeek ? "is-danger" : "")}
              type="number"
              placeholder="Số buổi học/tuần"
              value={data.sessionsPerWeek}
              onChange={handleSessionsPerWeek}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faHashtag} />
            </span>
          </div>
          {error.sessionsPerWeek && (
            <p className="help is-danger">{error.sessionsPerWeek}</p>
          )}
        </div>

        <div className="field column mb-0">
          <label className="label">Thời gian bắt đầu học</label>
          <div className="control has-icons-left">
            <input
              className={"input " + (error.openingDay ? "is-danger" : "")}
              type="date"
              placeholder="Thời gian bắt đầu học"
              value={data.openingDay}
              onChange={handleOpeningDay}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faCalendarDays} />
            </span>
          </div>
          {error.openingDay && (
            <p className="help is-danger">{error.openingDay}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label className="label">Yêu cầu về gia sư / giáo viên</label>
        <div className="control">
          <textarea
            value={data.note}
            onChange={handleNote}
            className="textarea"
            placeholder="Yêu cầu"
          ></textarea>
        </div>
        <p className="help">Không bắt buộc</p>
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

export default ClassRegistrationForm;
