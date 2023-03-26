import SecurityMessage from "./security-message";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChild,
  faVial,
  faGraduationCap,
  faLocationDot,
  faPhone,
  faBook,
  faHashtag,
  faCalendarDays,
  faArrowRightLong,
  faVenusMars,
  faEnvelope,
  faAddressCard,
  faSchool,
  faChartSimple,
  faBriefcase,
  faPlus,
  faPersonWalkingLuggage,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

function ClassRegistrationForm() {
  return (
    <div className="section">
      <h1 className="title is-1 is-size-3-touch color-primary">
        Đăng ký làm gia sư
      </h1>
      <h5 className="subtitle is-5">
        Các bạn muốn đăng ký nhận lớp tại trung tâm? Vui lòng điền form đăng ký
        bên dưới và đợi trung tâm liên hệ xét duyệt
      </h5>

      <SecurityMessage />

      <div className="field">
        <label className="label">Họ và tên</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="text" placeholder="Họ và tên" />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faChild} />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <p className="help ">Vui lòng nhập thông tin họ và tên</p>
      </div>
      <div className="field">
        <label className="label">Giới tính</label>
        <div className="control has-icons-left">
          <div className="select">
            <select>
              <option>Nam</option>
              <option>Nữ</option>
              <option>Khác</option>
            </select>
          </div>
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faVenusMars} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Ngày sinh</label>
        <div className="control has-icons-left">
          <input className="input" type="text" placeholder="Họ và tên" />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Công việc chính hiện tại</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Công việc chính hiện tại"
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faBriefcase} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Địa chỉ đang làm việc</label>
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
          <input className="input" type="text" placeholder="Số điện thoại" />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <p className="help ">Vui lòng nhập đúng số điện thoại</p>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left">
          <input className="input" type="text" placeholder="Email" />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Căn cước công dân</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Căn cước công dân"
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faAddressCard} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Sinh viên / giáo viên trường</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Sinh viên / giáo viên trường"
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faSchool} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Chuyên ngành</label>
        <div className="control has-icons-left">
          <input className="input" type="text" placeholder="Chuyên ngành" />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faVial} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Năm tốt nghiệp</label>
        <div className="control has-icons-left">
          <input className="input" type="text" placeholder="Năm tốt nghiệp" />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faGraduationCap} />
          </span>
        </div>
      </div>
      <div className="columns">
        <div className="column field">
          <label className="label">Xếp loại tốt nghiệp</label>
          <div className="control has-icons-left">
            <div className="select">
              <select>
                <option>Xuất sắc</option>
                <option>Giỏi</option>
                <option>Khá</option>
              </select>
            </div>
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faChartSimple} />
            </span>
          </div>
        </div>
        <div className="column field">
          <label className="label">Ảnh bằng cấp</label>
          <div className="control has-icons-left">
            <input className="input" type="text" placeholder="Họ và tên" />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faChartSimple} />
            </span>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Đăng kí môn dạy</label>
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
        <label className="label">Khu vực dạy</label>
        <div className="control has-icons-left">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faPersonWalkingLuggage} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Học phí mong muốn</label>
        <div className="control has-icons-left">
          <input className="input" type="text" placeholder="X.XXX.000đ" />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faDollarSign} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Thời gian rảnh</label>
        <div className="control has-icons-left">
          <input className="input" type="text" placeholder="Họ và tên" />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Ưu điểm</label>
        <div className="control has-icons-left">
          <input className="input" type="text" placeholder="Ưu điểm" />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Note</label>
        <div className="control">
          <textarea className="textarea" placeholder="Note"></textarea>
        </div>
        <p className="help">Không bắt buộc</p>
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

export default ClassRegistrationForm;
