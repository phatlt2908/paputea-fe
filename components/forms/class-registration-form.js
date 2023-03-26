import { useState, useEffect } from "react";
import staticApi from "@/services/staticApi";

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

function ClassRegistrationForm() {
  const [data, setData] = useState({
    registerName: null,
    addressId: null,
    addressDetail: null,
    registerPhone: null,
    gradeId: null,
    subjectId: null,
    sessionsPerWeek: 0,
    openingDay: null,
    note: null,
  });

  const [error, setError] = useState({
    registerName: null,
    addressId: null,
    addressDetail: null,
    registerPhone: null,
    gradeId: null,
    subjectId: null,
    sessionsPerWeek: 0,
    openingDay: null,
    note: null,
  });

  const [addressList, setAddressList] = useState([]);
  const [gradeList, setGradeList] = useState([]);

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
  }, []);

  handleRegisterName = (e) => {
    
  }

  submit = () => {
    validate();
  }

  validate = () => {
    let isValid = true;

    if (!data.registerName) {
      setError((prev) => ({
        ...prev,
        registerName: "Vui lòng nhập thông tin họ và tên",
      }));
      isValid = false;
    }

    if (!data.addressId) {
      setError((prev) => ({
        ...prev,
        addressId: "Vui lòng chọn và nhập thông tin địa chỉ",
      }));
      isValid = false;
    }

    if (
      !data.registerPhone ||
      data.registerPhone.match(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      )
    ) {
      setError((prev) => ({
        ...prev,
        registerPhone: "Nhập đúng thông tin số điện thoại",
      }));
      isValid = false;
    }

    if (!data.gradeId) {
      setError((prev) => ({
        ...prev,
        gradeId: "Vui lòng chọn lớp",
      }));
      isValid = false;
    }
  }

  return (
    <div className="section">
      <h1 className="title is-1 is-size-3-touch color-primary">
        Đăng kí tìm gia sư, giáo viên
      </h1>

      <SecurityMessage />

      <div className="field">
        <label className="label">Họ và tên</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className={"input " + (error.registerName ? "is-danger" : "")}
            type="text"
            placeholder="Họ và tên"
            value={data.registerName}
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faChild} />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        {error.registerName && (
          <p className="help is-danger">{error.registerName}</p>
        )}
      </div>
      <div className="field">
        <label className="label">Địa chỉ</label>
        <div className="field has-addons">
          <div className="control has-icons-left">
            <div className={"select " + (error.addressId ? "is-danger" : "")}>
              <select value={data.addressId}>
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
          <p class="control is-expanded">
            <input
              value={data.addressDetail}
              class={"input " + (error.registerName ? "is-danger" : "")}
              type="text"
              placeholder="Chi tiết địa chỉ (thành phố/quận/huyện, phường/xã/thị trấn)"
            ></input>
          </p>
        </div>
        {error.addressId && <p className="help is-danger">{error.addressId}</p>}
      </div>
      <div className="field">
        <label className="label">Số điện thoại</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className={"input " + (error.registerPhone ? "is-danger" : "")}
            type="text"
            placeholder="Số điện thoại"
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        {error.registerPhone && (
          <p className="help is-danger">{error.registerPhone}</p>
        )}
      </div>
      <div className="field">
        <label className="label">Học sinh lớp</label>
        <div className="control has-icons-left">
          <div className={"select " + (error.gradeId ? "is-danger" : "")}>
            <select value={data.gradeId}>
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
      <div className="field">
        <label className="label">Đăng ký môn học</label>
        <div className="control has-icons-left">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faBook} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Số buổi học/tuần</label>
        <div className="control has-icons-left">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faHashtag} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Thời gian bắt đầu học</label>
        <div className="control has-icons-left">
          <input
            className="input is-success"
            type="text"
            placeholder="Họ và tên"
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Yêu cầu về gia sư / giáo viên</label>
        <div className="control">
          <textarea className="textarea" placeholder="Yêu cầu"></textarea>
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
