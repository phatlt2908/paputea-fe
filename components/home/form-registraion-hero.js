import Image from "next/image";

function FormRegistrationHero() {
  return (
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="columns is-desktop">
          <div className="column is-8">
            <p className="title">
              Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
              việc trình bày và dàn trang phục vụ cho in ấn
            </p>
            <p className="subtitle is-5 mt-2">
              Để lại email hoặc số điện thoại để được liên hệ tư vấn!
            </p>
            <div className="field is-grouped">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Email hoặc số điện thoại"
                />
              </div>
              <div className="control">
                <button className="button is-primary">Gửi</button>
              </div>
            </div>
          </div>
          <div className="column is-hidden-touch has-text-centered">
            <img
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
