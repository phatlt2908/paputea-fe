import Link from "next/link";
import Logo from "./logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import classes from "./main-footer.module.scss";

function MainFooter() {
  return (
    <footer className={classes.main}>
      <div className={classes.newsletter}>
        <section className="bd-index-section bd-newsletter-box">
          <div className="bd-newsletter-heading columns is-desktop">
            <div className="column">
              <span className="icon has-text-primary is-size-2-widescreen">
                <font-awesome-icon icon="paper-plane" />
              </span>

              <h2 className="title has-text-black mb-0 is-size-2-widescreen">
                <strong>Phản hồi</strong>
                <small className="mt-2">
                  Rất mong nhận được những thắc mắc hoặc đóng góp ý kiến từ các
                  bạn, để ĐâyNè.run ngày càng hoàn thiện hơn!
                </small>
              </h2>
            </div>

            <div className="column">
              <div className="field">
                <div className="control has-icons-left is-expanded">
                  <input
                    type="email"
                    name="email"
                    className="input is-medium is-primary"
                    placeholder="email"
                  />
                  <span className="icon is-small is-left">
                    <font-awesome-icon icon="envelope" />
                  </span>
                </div>
                <p className="help">Không bắt buộc</p>
              </div>

              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea is-medium is-primary"
                    placeholder="Nội dung phản hồi..."
                  ></textarea>
                </div>
              </div>

              <div className="control">
                <button className="button is-medium is-primary">
                  <span className="icon is-medium">
                    <font-awesome-icon icon="comment" />
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
      <div className="bd-footer">
        <div className="container">
          <div className="bd-footer-links">
            <div className="columns is-desktop">
              <div className="column">
                <h4 className="bd-footer-title">
                  <strong>DayNe.run</strong> bởi
                  <a target="_blank" href="https://www.facebook.com/phatamao">
                    PhátLT
                  </a>
                </h4>
                <p className="bd-footer-tsp">
                  Vì mục đích chia sẻ
                  <br />
                  và phi lợi nhuận
                </p>
              </div>
              <div className="column">
                <p className="bd-footer-link-title">
                  <Link href="/">
                    <span>Danh mục</span>
                  </Link>
                </p>
                <p className="bd-footer-link">
                  <Link href="/">
                    <span>Games</span>
                  </Link>
                </p>
                <div className="column">
                  <h4 className="bd-footer-title">
                    <strong>Hỗ trợ</strong> DayNe.run 😃
                  </h4>
                  <p className="bd-footer-link bd-has-subtitle">
                    <a
                      target="_blank"
                      href="https://me.momo.vn/vjIyuZsGU1UAFlfkIRsn"
                    >
                      <strong> Momo </strong>
                      <em> donate qua Momo </em>
                    </a>
                  </p>
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
