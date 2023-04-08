import Link from "next/link";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faPhone,
  faBook,
  faHashtag,
  faLocationDot,
  faChartSimple,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import { formatCurrency, formatDate } from "@/utils/string-util";
import classApi from "@/services/classApi";
import tutorApi from "@/services/tutorApi";
import commonConst from "@/constants/commonConst";
import Loading from "../common/loading";

function ClassDetailInfo({ classCode }) {
  const [data, setData] = useState();
  const [phone, setPhone] = useState();
  const [isPhoneChecking, setIsPhoneChecking] = useState(false);
  const [isCorrectPhone, setIsCorrectPhone] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);
  const [tutorInfo, setTutorInfo] = useState();

  useEffect(() => {
    classApi
      .getClassDetail(classCode)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [classCode]);

  function handleBlurPhone(phone) {
    setPhone(phone);
    setTutorInfo(null);
    if (validatePhoneFormat(phone)) {
      setIsPhoneChecking(true);
      setIsCorrectPhone(true);
      tutorApi
        .checkTutorPhone(phone)
        .then((res) => {
          const tutorInfo = res.data;
          setTutorInfo(tutorInfo);
        })
        .catch((err) => {
          setIsCorrectPhone(false);
          console.error(err);
        })
        .finally(() => {
          setIsPhoneChecking(false);
        });
    } else {
      setIsCorrectPhone(false);
    }
  }

  function handleChangePhone(e) {
    // Clear the previous timeout
    clearTimeout(timeoutId);
    // Set a new timeout to trigger the onBlur event after 1 second
    const newTimeoutId = setTimeout(handleBlurPhone(e.target.value), 1000);
    setTimeoutId(newTimeoutId);
  }

  useEffect(() => {
    // Clean up the timeout when the component unmounts or when value changes
    return () => clearTimeout(timeoutId);
  }, [timeoutId]);

  const validatePhoneFormat = (phone) => {
    const isCorrect =
      phone &&
      phone.match(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      );
    return isCorrect;
  };

  return (
    <div className="section">
      {data ? (
        <div>
          <h1 className="title is-1">Mã số: {classCode}</h1>
          <div className="columns is-desktop">
            <div className="column">
              <div className="is-size-7">
                Ngày đăng: {formatDate(data.registrationDate)}
              </div>
              <h4 className="title is-4 color-primary my-4">
                {data.tuition && data.tuition > 0
                  ? formatCurrency(data.tuition)
                  : "? ₫"}
              </h4>
              <div className="icon-text mb-1">
                <span className="icon">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>
                <span className="ml-2">Khối lớp:</span>
                <span className="ml-2 has-text-weight-bold">
                  {data.gradeName}
                </span>
              </div>
              <div className="icon-text mb-1">
                <span className="icon">
                  <FontAwesomeIcon icon={faBook} />
                </span>
                <span className="ml-2">Môn học:</span>
                <span className="ml-2 has-text-weight-bold">
                  {data.subjectName}
                </span>
              </div>
              <div className="icon-text mb-1">
                <span className="icon">
                  <FontAwesomeIcon icon={faHashtag} />
                </span>
                <span className="ml-2">Số buổi / tuần:</span>
                <span className="ml-2 has-text-weight-bold">
                  {data.sessionsPerWeek}
                </span>
              </div>
              <div className="icon-text mb-1">
                <span className="icon">
                  <FontAwesomeIcon icon={faChartSimple} />
                </span>
                <span className="ml-2">Trình độ yêu cầu:</span>
                <span className="ml-2 has-text-weight-bold">
                  {
                    commonConst.TUTOR_TYPE.find((e) => e.id == data.tutorType)
                      .name
                  }
                </span>
              </div>
              <div className="icon-text mb-1">
                <span className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span className="ml-2">Địa chỉ:</span>
                <span className="ml-2 has-text-weight-bold">
                  {data.addressDetail}, {data.province}
                </span>
              </div>
              {data.note && (
                <div className="mb-2 mt-2">
                  <article className="message is-warning">
                    <div className="message-header">
                      <p>Yêu cầu</p>
                    </div>
                    <div className="message-body">{data.note}</div>
                  </article>
                </div>
              )}
            </div>
            <div className="column">
              <div className="field">
                <label className="label">
                  Nhập số điện thoại để đăng ký nhận lớp
                </label>
                <div
                  className={
                    "control has-icons-left has-icons-right " +
                    (isPhoneChecking && "is-loading")
                  }
                >
                  <input
                    className={"input " + (isCorrectPhone ? "" : "is-danger")}
                    type="text"
                    placeholder="Số điện thoại"
                    value={phone}
                    onChange={handleChangePhone}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                </div>
                {!isCorrectPhone && (
                  <p className="help is-danger">
                    Vui lòng nhập đúng số điện thoại
                  </p>
                )}
              </div>

              {phone &&
                isCorrectPhone &&
                (tutorInfo ? (
                  <div>
                    <article className="message is-success">
                      <div className="message-header">
                        <p>Thông tin gia sư</p>
                      </div>
                      <div className="message-body">
                        <div>
                          Tên gia sư: <strong>{tutorInfo.name}</strong>
                        </div>
                        <div>
                          Khu vực: <strong>{tutorInfo.province}</strong>
                        </div>
                        <div>
                          Trạng thái gia sư:{" "}
                          <strong>
                            {tutorInfo.isApproved
                              ? "Đã xác nhận"
                              : "Đang đợi xác nhận"}
                          </strong>
                        </div>
                      </div>
                    </article>
                  </div>
                ) : (
                  <div className="has-text-danger">
                    Bạn chưa đăng ký làm gia sư! Vui lòng{" "}
                    <Link href="/tutor/tutor-registration">
                      đăng ký làm gia sư
                    </Link>{" "}
                    trước khi nhận lớp
                  </div>
                ))}

              <div className="field is-grouped mt-3">
                <div className="control">
                  <Link className="button is-text" href={`/tutor/class-list`}>
                    <span className="icon">
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </span>
                    <span>Quay lại</span>
                  </Link>
                </div>
                <div className="control">
                  <button disabled={!tutorInfo} className="button is-primary">
                    Nhận lớp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default ClassDetailInfo;
