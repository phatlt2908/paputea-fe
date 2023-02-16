import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function MainNavigation() {
  const [isActiveMobile, setIsActiveMobile] = useState(false);

  const onBurger = () => {
    setIsActiveMobile(!isActiveMobile);
  };

  return (
    <header>
      <nav
        className="navbar bg-base-100"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link href="https://bulma.io" className="navbar-item">
            <Logo />
          </Link>

          <a
            role="button"
            className={"navbar-burger " + (isActiveMobile && "is-active")}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={onBurger}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={"navbar-menu " + (isActiveMobile && "is-active")}
        >
          <div className="navbar-start">
            <a className="navbar-item is-active">Trang chủ</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Phụ Huynh Học Sinh</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Học phí tham khảo</a>
                <a className="navbar-item">Các vấn đề lưu ý</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Tìm gia sư</a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Gia sư</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Danh sách các lớp</a>
                <a className="navbar-item">Điều khoản</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Đăng ký làm gia sư</a>
              </div>
            </div>
            <a className="navbar-item">Tài liệu</a>
            <a className="navbar-item">Tin tức</a>
            <a className="navbar-item">Về chúng tôi</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button">Sign up</a>
                <a className="button">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
