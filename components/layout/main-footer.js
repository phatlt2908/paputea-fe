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
                  Lorem Ipsum chỉ đơn giản là một
                  <br /> đoạn văn bản giả, được dùng <br /> vào việc trình bày
                  và dàn trang
                  <br /> phục vụ cho in ấn
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
                    href="https://www.google.com/maps?ll=10.876283,106.654802&z=15&t=m&hl=en&gl=US&mapclient=embed&q=%C4%90.+L%C3%AA+Th%E1%BB%8B+Ri%C3%AAng+Th%E1%BB%9Bi+An+Qu%E1%BA%ADn+12+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh"
                  >
                    <span>
                      <FontAwesomeIcon icon={faLocationDot} />
                      <span className="ml-2">
                        C21 Lê Thị Riêng, P. Thới An, Q. 12, TP. Hồ Chí Minh
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
                    href="mailto:trungtampaputea@gmail.com"
                  >
                    <span>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span className="ml-2">trungtampaputea@gmail.com</span>
                    </span>
                    <em>Email</em>
                  </a>
                </p>
                <div className="box mt-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9319.481799957115!2d106.64854740487561!3d10.860243755632828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529ddf5219545%3A0x8582b7850ec0e767!2zxJAuIEzDqiBUaOG7iyBSacOqbmcsIFRo4bubaSBBbiwgUXXhuq1uIDEyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1677922492441!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
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
