import { formatCurrency } from "@/utils/string-util";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

import classes from "./class-card.module.css";

function ClassCard() {
  return (
    <div className="card">
      <header className="card-header">
        <div className="card-header-title">Mã số lớp: 23001</div>
        <div className="card-header-icon">
          <div
            className="is-size-7 icon-text color-primary"
            title="Các bạn đăng ký trước sẽ được ưu tiên trước trong thứ tự xét duyệt"
          >
            <span>
              Đã có <strong>4</strong> gia sư ứng tuyển đứng lớp
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
            <span className="ml-2 has-text-weight-bold">11</span>
          </div>
          <div className="icon-text mb-1">
            <span className="icon">
              <FontAwesomeIcon icon={faBook} />
            </span>
            <span className="ml-2">Môn học:</span>
            <span className="ml-2 has-text-weight-bold">Hóa học</span>
          </div>
          <div className="icon-text mb-1">
            <span className="icon">
              <FontAwesomeIcon icon={faHashtag} />
            </span>
            <span className="ml-2">Số buổi / tuần:</span>
            <span className="ml-2 has-text-weight-bold">2</span>
          </div>
          <div className="icon-text mb-1">
            <span className="icon">
              <FontAwesomeIcon icon={faChartSimple} />
            </span>
            <span className="ml-2">Trình độ yêu cầu:</span>
            <span className="ml-2 has-text-weight-bold">Sinh viên</span>
          </div>
          <div className="icon-text mb-1">
            <span className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <span className="ml-2">Địa chỉ:</span>
            <span className="ml-2 has-text-weight-bold">
              Vĩnh Điềm Trung, Nha Trang, Khánh Hòa
            </span>
          </div>
          <div className="mb-1 is-italic">
            <span>Yêu cầu:</span>
            <span className="ml-2">
              Giáo viên nữ, đã tốt nghiệp đúng chuyên ngành
            </span>
          </div>
          <h4 className="title is-4 color-primary my-4">
            {formatCurrency(1500000)}
          </h4>
          <div className="is-size-7">Ngày đăng: 03/17/2023</div>
        </div>
      </div>
      <footer className="card-footer">
        <a
          href="#"
          className={classes.regist + " card-footer-item color-primary"}
        >
          Đăng ký dạy
        </a>
        <a href="#" className={classes.reaction + " card-footer-item"}>
          <div className="icon-text">
            <span className={classes.icon + " icon"}>
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span>3</span>
          </div>
        </a>
      </footer>
    </div>
  );
}

export default ClassCard;
