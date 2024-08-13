import Link from "next/link";
import Logo from "./logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import classes from "./main-footer.module.scss";

function MainFooter() {
  return (
    <footer className={classes.main}>
      <div className={classes.newsletter}>
        <section className={`${classes.section} ${classes.box}`}>
          <div className={`${classes.heading} columns is-desktop`}>
            <div className={`${classes.column} column`}>
              <span
                className={`${classes.icon} icon has-text-primary is-size-2-widescreen`}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>

              <h2
                className={`${classes.title} title has-text-black mb-0 is-size-2-widescreen`}
              >
                <strong>Phản hồi</strong>
                <small className="mt-2">
                  Rất mong nhận được những thắc mắc hoặc đóng góp ý kiến từ các
                  bạn, để <strong>Paputea</strong> ngày càng hoàn thiện hơn! 😍
                </small>
              </h2>
            </div>

            <div className="column">
              <div className="field">
                <div className="control has-icons-left is-expanded">
                  <input
                    type="email"
                    name="email"
                    className="input is-medium"
                    placeholder="email"
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </div>
                <p className="help">Không bắt buộc</p>
              </div>

              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea is-medium"
                    placeholder="Nội dung phản hồi..."
                  ></textarea>
                </div>
              </div>

              <div className="control">
                <button className="button is-medium is-primary">
                  <span className="icon is-medium">
                    <FontAwesomeIcon icon={faComment} />
                  </span>
                  <span>
                    <strong>Gửi phản hồi</strong>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.footer}>
        <div className="container">
          <div className={classes.links}>
            <div className="columns is-desktop">
              <div className="column">
                <h4 className={classes.footerTitle}>
                  <strong>Paputea</strong>
                </h4>
                <p className={classes.tsp}>
                  Tự hào là cầu nối
                  <br /> giữa Thầy Cô - Phụ Huynh - Học Sinh
                </p>
              </div>
              <div className="column">
                <p className={classes.linkTitle}>
                  <Link href="/">
                    <span>Danh mục</span>
                  </Link>
                </p>
                <p className={classes.link}>
                  <Link href="/">
                    <span>Dành cho phụ huynh</span>
                  </Link>
                </p>
                <p className={classes.link}>
                  <Link href="/">
                    <span>Dành cho học sinh</span>
                  </Link>
                </p>
                <p className={classes.link}>
                  <Link href="/">
                    <span>Dành cho gia sư</span>
                  </Link>
                </p>
                <p className={classes.link}>
                  <Link href="/">
                    <span>Tin tức</span>
                  </Link>
                </p>
              </div>
              <div className="column">
                <h4 className={classes.footerTitle}>
                  <strong>Liên hệ</strong> 👀
                </h4>
                <p className={`${classes.link} ${classes.subtitle}`}>
                  <a
                    className="mb-1"
                    target="_blank"
                    rel="noreferrer"
                    href="https://maps.app.goo.gl/gU18SwoLR7zGTv1V7"
                  >
                    <span>
                      <FontAwesomeIcon icon={faLocationDot} />
                      <span className="ml-2">
                        43/21/4 Vườn Lài, An Phú Đông, Quận 12, TP. Hồ Chí Minh
                      </span>
                    </span>
                    <em>Địa chỉ</em>
                  </a>
                  <a
                    className="mb-1"
                    target="_blank"
                    rel="noreferrer"
                    href="tel:0941388990"
                  >
                    <span>
                      <FontAwesomeIcon icon={faPhone} />
                      <span className="ml-2">0941 388 990</span>
                    </span>
                    <em>Phone / Zalo</em>
                  </a>
                  <a
                    className="mb-1"
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:thanhcuc1501@gmail.com"
                  >
                    <span>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span className="ml-2">thanhcuc1501@gmail.com</span>
                    </span>
                    <em>Email</em>
                  </a>
                </p>
                <div className="box mt-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.392751489749!2d106.6915423870775!3d10.857702918838568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d6baa1fb37%3A0xf67c6300179c64e7!2zUGjDsm5nIHRy4buNIDQzLzIxLzQgVsaw4budbiBMw6Bp!5e0!3m2!1sen!2s!4v1706752036578!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
