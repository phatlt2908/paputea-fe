import Link from "next/link";

import { formatCurrency, formatDate } from "@/utils/string-util";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

import classes from "./class-card.module.css";

import commonConst from "@/constants/commonConst";

function ClassCard({
  classItem: {
    id,
    code,
    province,
    addressDetail,
    gradeName,
    subjectName,
    openingDay,
    sessionsPerWeek,
    likeCount,
    note,
    registrationDate,
    tutorType,
    tuition,
  },
}) {
  return (
    <div className="card">
      <header className="card-header">
        <div className="card-header-title">
          <Link href={`/tutor/class-list/${encodeURIComponent(code)}`}>
            Mã số lớp: {code}
          </Link>
        </div>
        <div className="card-header-icon">
          <div
            className="is-size-7 icon-text color-primary"
            title="Các bạn đăng ký trước sẽ được ưu tiên trước trong thứ tự xét duyệt"
          >
            <span>
              Có <strong>4</strong> gia sư ứng tuyển
            </span>
            <span className="icon">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
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
              {addressDetail}, {province}
            </span>
          </div>
          {note && (
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
        <a href="#" className={classes.reaction + " card-footer-item"}>
          <div className="icon-text">
            <span className={classes.icon + " icon"}>
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span>{likeCount}</span>
          </div>
        </a>
      </footer>
    </div>
  );
}

export default ClassCard;
