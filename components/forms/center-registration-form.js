import SecurityMessage from "./security-message";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function CenterRegistrationForm() {
  return (
    <div className="section">
      <h1 className="title is-1 is-size-3-touch color-primary">
        Đăng kí lớp học trực tiếp tại Trung tâm Paputea
      </h1>
      <h3 className="subtitle is-3 is-size-5-touch">
        (C21 Lê Thị Riêng- Quận 12- TP. Hồ Chí Minh)
      </h3>

      <SecurityMessage />

      <div className="field">
        <label className="label">Họ và tên học sinh</label>
        <div className="control has-icons-left">
          <input
            className="input is-success"
            type="text"
            placeholder="Họ và tên"
          />
          <span className="icon is-small is-left"> 
            <FontAwesomeIcon icon={faChild} />
          </span>
        </div>
        <p className="help is-success">Vui lòng nhập thông tin họ và tên</p>
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
        <label className="label">Lớp</label>
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

      <div className="field mt-6">
        <div className="control has-text-centered">
          <button className="button is-primary">
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

export default CenterRegistrationForm;
