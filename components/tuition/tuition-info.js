import { useState, useEffect } from "react";
import staticApi from "@/services/staticApi";

import { formatCurrency } from "@/utils/string-util";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faGlobe,
  faHouse,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import tuitionConst from "@/constants/tuitionConst";

function TuitionInfo() {
  const [addressList, setAddressList] = useState([]);
  const [addressCode, setAddressCode] = useState("KH");
  const [classType, setClassType] = useState(1);
  const [tuitionList, setTuitionList] = useState(
    tuitionConst.STANDARD_TUITION.KH
  );

  useEffect(() => {
    staticApi
      .getProvinceList()
      .then((res) => {
        res.data.shift();
        setAddressList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    switch (classType) {
      case 1:
        setTuitionList(tuitionConst.STANDARD_TUITION[addressCode]);
        break;
      case 2:
        setTuitionList(tuitionConst.CENTER_TUITION[addressCode]);
        break;
      case 3:
        setTuitionList(tuitionConst.ONLINE_TUITION[addressCode]);
        break;

      default:
        setTuitionList(tuitionConst.STANDARD_TUITION[addressCode]);
        break;
    }
  }, [classType, addressCode]);

  const handleAddressCode = (e) => {
    setAddressCode(e.target.value);
  };

  const handleClassType = (value) => {
    setClassType(value);
    if (value == 2) {
      setAddressCode("HCM");
    }
  };

  return (
    <>
      <h1 className="title is-1 is-size-3-touch color-primary">
        Bảng phí tham khảo tại Paputea
      </h1>
      <div className="tabs is-toggle">
        <ul>
          <li
            onClick={() => handleClassType(1)}
            className={classType == 1 ? "is-active" : ""}
          >
            <a>
              <span className="icon is-small">
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <span>Kèm tại gia</span>
            </a>
          </li>
          <li
            onClick={() => handleClassType(2)}
            className={classType == 2 ? "is-active" : ""}
          >
            <a>
              <span className="icon is-small">
                <FontAwesomeIcon icon={faBuilding} />
              </span>
              <span>Tại trung tâm</span>
            </a>
          </li>
          <li
            onClick={() => handleClassType(3)}
            className={classType == 3 ? "is-active" : ""}
          >
            <a>
              <span className="icon is-small">
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              <span>Trực tuyến</span>
            </a>
          </li>
        </ul>
      </div>
      {classType != 2 && (
        <div className="field">
          <label className="label">Chọn khu vực</label>
          <div className="control has-icons-left">
            <div className="select">
              <select value={addressCode} onChange={handleAddressCode}>
                {addressList.map(function (address, i) {
                  return (
                    <option value={address.code} key={i}>
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
        </div>
      )}

      <div className="table-container">
        <table className="table is-striped is-hoverable is-fullwidth is-bordered">
          <thead>
            <tr>
              <th rowSpan="2"></th>
              <th colSpan="2">2 buổi/tuần</th>
              <th colSpan="2">3 buổi/tuần</th>
              {classType != 2 && (
                <>
                  <th colSpan="2">4 buổi/tuần</th>
                  <th colSpan="2">5 buổi/tuần</th>
                </>
              )}
            </tr>
            {classType == 2 ? (
              <tr>
                <th>Lớp 5-10 HS</th>
                <th>Lớp 11-15 HS</th>
                <th>Lớp 5-10 HS</th>
                <th>Lớp 11-15 HS</th>
              </tr>
            ) : (
              <tr>
                <th>Sinh viên</th>
                <th>Giáo viên</th>
                <th>Sinh viên</th>
                <th>Giáo viên</th>
                <th>Sinh viên</th>
                <th>Giáo viên</th>
                <th>Sinh viên</th>
                <th>Giáo viên</th>
              </tr>
            )}
          </thead>
          <tbody>
            {tuitionList.map(function (classTuition, classIndex) {
              return (
                <tr key={classIndex}>
                  <th>{classTuition.title}</th>
                  {classTuition.value.map(function (tuition, i) {
                    return <td key={i}>{formatCurrency(tuition)}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {classType == 2 && (
          <div className="is-italic has-text-danger">
            * Học phí này tính cho 1 học sinh (lớp học tối đa 20 học sinh)
          </div>
        )}
      </div>

      <div className="field">
        <div className="control has-text-centered">
          <button className="button is-normal is-primary is-rounded">
            <Link className="is-size-6" href="/parent/class-registration">
              Đăng ký
            </Link>
          </button>
        </div>
      </div>

      <article className="message is-warning">
        <div className="message-header">
          <p>Lưu ý</p>
        </div>
        <div className="message-body">
          <div className="content">
            <ul>
              <li>
                Học phí trên áp dụng cho{" "}
                <strong>1 tháng từ thời điểm gia sư bắt đầu dạy </strong>
                học viên
              </li>
              <li>
                Học phí trên áp dụng cho gia sư, giáo viên{" "}
                <strong>
                  dạy trực tiếp tại nhà phụ huynh, hoặc tại trung tâm
                </strong>
                , các lớp online học phí sẽ thấp hơn
              </li>
              <li>
                Ngoài ra, học phí <strong>tăng hay giảm</strong> còn phụ thuộc
                vào <strong>số môn học, số người học và địa điểm học</strong>
              </li>
              <li>
                Học phí trên áp dụng cho giáo viên có{" "}
                <strong>bằng cử nhân</strong> của các trường đại học khác hoặc
                giáo viên có <strong>bằng đại học sư phạm</strong>
              </li>
              <li>
                Đối với thạc sỹ, giáo viên thâm niên, giáo viên dạy tại trường
                có kinh nghiệm dạy kèm, mức học phí sẽ cao hơn
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}

export default TuitionInfo;
