import Link from "next/link";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faHeart,
  faHouseUser,
  faGraduationCap,
  faBook,
  faHashtag,
  faLocationDot,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

import { formatCurrency, formatDate } from "@/utils/string-util";
import classes from "./class-card.module.css";
import commonConst from "@/constants/commonConst";
import classApi from "@/services/classApi";

function ClassCard({
  classItem: {
    id,
    code,
    province,
    district,
    gradeName,
    subjectName,
    openingDay,
    sessionsPerWeek,
    likeCount,
    note,
    registrationDate,
    tutorType,
    tuition,
    isOnline,
  },
  isDisplayNote
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCountDisplay, setLikeCountDisplay] = useState(likeCount);

  const handleLike = () => {
    classApi
      .likeClass(code, !isLiked)
      .then(() => {
        setLikeCountDisplay(isLiked ? likeCount : likeCount + 1);
        setIsLiked(!isLiked);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="card">
      <header className="card-header">
        <div className="card-header-title">
          <Link href={`/tutor/class-list/${encodeURIComponent(code)}`}>
            Mã số lớp: {code}
          </Link>
        </div>
        <div className="card-header-icon">
          <div>
            {isOnline ? (
              <span className="icon-text has-text-primary">
                <span>Lớp trực tuyến</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faGlobe} />
                </span>
              </span>
            ) : (
              <span className="icon-text has-text-info">
                <span>Lớp tại gia</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faHouseUser} />
                </span>
              </span>
            )}
          </div>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="icon-text mb-1">
            <span className="icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </span>
            <span className="ml-2">Khối lớp:</span>
            <span className="ml-2 has-text-weight-bold">{gradeName}</span>
          </div>
          <div className="icon-text mb-1">
            <span className="icon">
              <FontAwesomeIcon icon={faBook} />
            </span>
            <span className="ml-2">Môn học:</span>
            <span className="ml-2 has-text-weight-bold">{subjectName}</span>
          </div>
          <div className="icon-text mb-1">
            <span className="icon">
              <FontAwesomeIcon icon={faHashtag} />
            </span>
            <span className="ml-2">Số buổi / tuần:</span>
            <span className="ml-2 has-text-weight-bold">{sessionsPerWeek}</span>
          </div>
          <div className="icon-text mb-1">
            <span className="icon">
              <FontAwesomeIcon icon={faChartSimple} />
            </span>
            <span className="ml-2">Trình độ yêu cầu:</span>
            <span className="ml-2 has-text-weight-bold">
              {commonConst.TUTOR_TYPE.find((e) => e.id == tutorType).name}
            </span>
          </div>
          <div className="icon-text mb-1">
            <span className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <span className="ml-2">Địa chỉ:</span>
            <span className="ml-2 has-text-weight-bold">
              {district} - {province}
            </span>
          </div>
          {note && isDisplayNote && (
            <div className="mb-2 mt-2">
              <article className="message is-warning">
                <div className="message-body p-2">{note}</div>
              </article>
            </div>
          )}
          <h4 className="title is-4 color-primary my-4">
            {tuition && tuition > 0 ? formatCurrency(tuition) : "? ₫"}
          </h4>
          <div className="is-size-7">
            Ngày đăng: {formatDate(registrationDate)}
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <Link
          href={`/tutor/class-list/${encodeURIComponent(code)}`}
          className={classes.regist + " card-footer-item color-primary"}
        >
          Đăng ký dạy
        </Link>
        <a
          className={classes.reaction + " card-footer-item"}
          onClick={() => handleLike()}
        >
          <div className="icon-text">
            <span className={classes.icon + " icon"}>
              <FontAwesomeIcon
                icon={faHeart}
                className={isLiked ? "has-text-danger" : ""}
              />
            </span>
            <span>{likeCountDisplay}</span>
          </div>
        </a>
      </footer>
    </div>
  );
}

export default ClassCard;
