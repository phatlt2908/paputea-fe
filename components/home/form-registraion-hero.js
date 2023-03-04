import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function FormRegistrationHero() {
  return (
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="columns is-desktop is-vcentered">
          <div className="column is-8">
            <div className="py-6">
              <p className="title is-1">Trung tâm Paputea</p>
              <p className="subtitle is-5">
                <strong>Cầu nối giữa Thầy Cô - Phụ Huynh - Học Sinh</strong>
              </p>
            </div>
            <div className="py-6 columns">
              <div className="column">
                <div className="icon-text mb-2">
                  <span className="icon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span>Nhận lớp nhóm dạy trực tiếp</span>
                </div>
                <div className="icon-text mb-2">
                  <span className="icon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span>Hỗ trợ tìm gia sư dạy kèm 1:1 tại nhà</span>
                </div>
                <div className="icon-text mb-2">
                  <span className="icon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span>Hỗ trợ tìm gia sư dạy online</span>
                </div>
                <div className="icon-text mb-2">
                  <span className="icon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span>Rèn chữ đẹp</span>
                </div>
              </div>
              <div className="column">
                <div className="icon-text mb-2">
                  <span className="icon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span>Luyện thi đại học</span>
                </div>
                <div className="icon-text mb-2">
                  <span className="icon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span>Luyện thi chứng chỉ ngoại ngữ</span>
                </div>
                <div className="icon-text mb-2">
                  <span className="icon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span>Tiếng Anh giao tiếp</span>
                </div>
                <div className="icon-text mb-2">
                  <span className="icon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span>Tin học văn phòng</span>
                </div>
              </div>
            </div>
            <div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-large is-primary is-rounded">
                    <span className="is-size-5">Đăng ký</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-hidden-touch has-text-centered">
            <Image
              src="/hero-image.png"
              alt="Hero image"
              width={250}
              height={24}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormRegistrationHero;
