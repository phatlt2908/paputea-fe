import SecurityMessage from "./security-message";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function ClassRegistrationForm() {
  return (
    <div className="section">
      <h1 className="title is-1">Đăng kí tìm gia sư, giáo viên</h1>

      <SecurityMessage />

      <div className="field">
        <label className="label">Họ và tên</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            type="text"
            placeholder="Họ và tên"
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faChild} />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <p className="help is-success">Vui lòng nhập thông tin họ và tên</p>
      </div>
      <div className="field">
        <label className="label">Địa chỉ</label>
        <div className="control has-icons-left">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Số điện thoại</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
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
        <p className="help is-success">Vui lòng nhập đúng số điện thoại</p>
      </div>
      <div className="field">
        <label className="label">Học sinh lớp</label>
        <div className="control has-icons-left">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faGraduationCap} />
          </span>
        </div>
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
      </div>
    </div>
  );
}

export default ClassRegistrationForm;
