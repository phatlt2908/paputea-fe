import { formatCurrency } from "@/utils/string-util";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import classes from "./class-card.module.css";

function ClassCard() {
  return (
    <div className="card">
      <header className="card-header">
        <div className="card-header-title">Mã số lớp: 23001</div>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </button>
      </header>
      <div className="card-content">
        <div className="content">
          <div>Khối lớp: 11</div>
          <div>Môn học: Hóa học</div>
          <div>Số buổi: 2 buổi / tuần</div>
          <div>Địa chỉ: Vĩnh Điềm Trung, Nha Trang, Khánh Hòa</div>
          <div>Học phí: {formatCurrency(1500000)}</div>
          <div>Yêu cầu: Giáo viên nữ, đã tốt nghiệp đúng chuyên ngành</div>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className={classes.regist + " card-footer-item color-primary"}>
          <strong>Đăng ký dạy</strong>
        </a>
        <a href="#" className={classes.reaction + " card-footer-item"}>
          <FontAwesomeIcon icon={faHeart} />
        </a>
      </footer>
    </div>
  );
}

export default ClassCard;
