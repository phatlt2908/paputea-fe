import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function TutorHero() {
  return (
    <section className="hero is-medium">
      <div className="hero-body has-text-centered">
        <p className="title">Bạn muốn làm gia sư ?</p>
        <p className="subtitle is-5">
          Đăng ký ngay để được kiểm tra năng lực và nhận lớp 🥳
        </p>
        <p className="subtitle is-7">
          Cùng với hơn <strong>1500</strong> gia sư đã nhận lớp và được đánh giá tốt thông qua
          PaPuTea
        </p>
        <button className="button is-primary">
          <span>Đăng ký ngay</span>
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faArrowRightLong} />
          </span>
        </button>
      </div>
    </section>
  );
}

export default TutorHero;
