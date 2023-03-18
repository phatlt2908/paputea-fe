import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "./logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import classes from "./main-navigation.module.css";

function MainNavigation() {
  const [isActiveMobile, setIsActiveMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsActiveMobile(false);
  }, [router.query]);

  const onBurger = () => {
    setIsActiveMobile(!isActiveMobile);
  };

  return (
    <header>
      <nav
        className={classes.main + " navbar bg-base-100 shadow-sm"}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link href="/" className="navbar-item">
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
            <Link className="navbar-item is-active" href="/">
              Trang chủ
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Phụ Huynh</a>
              <div className="navbar-dropdown">
                <Link className="navbar-item" href="/parent/class-registration">
                  Đăng kí tìm gia sư, giáo viên
                </Link>
                <Link
                  className="navbar-item"
                  href="/parent/center-registration"
                >
                  Đăng kí học tại Trung tâm Paputea
                </Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item" href="/parent/tuition">
                  Học phí tham khảo
                </Link>
                <Link className="navbar-item" href="/parent/note">
                  Phụ huynh cần biết
                </Link>
                <Link className="navbar-item" href="/">
                  Gia sư hiện có
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Học sinh</a>
              <div className="navbar-dropdown">
                <Link
                  className="navbar-item"
                  href="/student/center-registration"
                >
                  Đăng kí tìm lớp
                </Link>
                <Link
                  className="navbar-item"
                  href="/student/class-registration"
                >
                  Đăng kí tìm gia sư
                </Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item" href="/student/tuition">
                  Học phí tham khảo
                </Link>
                <Link className="navbar-item" href="/student/note">
                  Học sinh cần biết
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Gia sư</a>
              <div className="navbar-dropdown">
                <Link className="navbar-item" href="/tutor/tutor-registration">
                  Đăng kí gia sư
                </Link>
                <Link className="navbar-item" href="/tutor/class-list">
                  Lớp mới chưa giao
                </Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item" href="/tutor/rule">
                  Quy định khi nhận lớp
                </Link>
                <Link className="navbar-item" href="/tutor/note">
                  Gia sư cần biết
                </Link>
              </div>
            </div>
            <a className="navbar-item">Tài liệu</a>
            <a className="navbar-item">Tin tức</a>
            <Link className="navbar-item" href="/about">
              Về chúng tôi
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button">Sign up</a>
                <a className="button">
                  <span className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
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
