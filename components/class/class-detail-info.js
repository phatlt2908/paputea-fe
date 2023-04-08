import Link from "next/link";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

import { formatCurrency, formatDate } from "@/utils/string-util";
import classApi from "@/services/classApi";

function ClassDetailInfo({ classCode }) {
  const [data, setData] = useState();
  useEffect(() => {
    classApi
      .getClassDetail(classCode)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="section">
      {data ? (
        <div>
          <h1 className="title is-1">Mã số lớp: {classCode}</h1>
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
            <span className="ml-2 has-text-weight-bold">{data.gradeName}</span>
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
            <span className="ml-2 has-text-weight-bold">{data.tutorType}</span>
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
          <div className="mb-2 mt-2 is-italic">
            <span>Yêu cầu:</span>
            <span className="ml-2">{data.note}</span>
          </div>
          <div className="is-size-7">
            Ngày đăng: {formatDate(data.registrationDate)}
          </div>
        </div>
      ) : (
        <div>A</div>
      )}
    </div>
  );
}

export default ClassDetailInfo;
