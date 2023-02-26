import classes from "./online-service-hero.module.css";

function OnlineServiceHero() {
  return (
    <div className={classes.main}>
      <section className="hero is-large">
        <div className="hero-body has-text-centered">
          <p className="title">Lớp học trực tuyến</p>
          <p className="subtitle is-5">
            Tiết kiệm thời gian - Học phí thấp - Tìm kiếm gia sư dễ dàng và đảm
            bảo chất lượng
          </p>
          <button className="button is-primary">
            <span>Tìm hiểu thêm</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default OnlineServiceHero;
