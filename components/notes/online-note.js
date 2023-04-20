import Link from "next/link";

function OnlineNote() {
  return (
    <section className="container section">
      <div className="content">
        <h1 className="is-size-3-touch">LƯU Ý KHI HỌC TRỰC TUYẾN</h1>

        <h3>Chuẩn bị thiết bị trước khi vào buổi học</h3>
        <p>
          Để buổi học có hiệu quả và tránh lãng phí thời gian của học sinh và
          giáo viên thì trước khi tham gia lớp học trực tuyến phụ huynh và học
          sinh cần chuẩn bị tốt các dụng cụ thiết yếu như: Máy tính hoặc điện
          thoại kết nối mạng internet, sách, vở ghi chép và dụng cụ học tập cần
          thiết, vào lớp trực tuyến đúng giờ theo link có sẵn của giáo viên
        </p>

        <h3>Cần có thái độ học tập nghiêm túc</h3>
        <p>
          Dù không học trực tiếp với thầy cô, các phụ huynh cũng cần dặn dò học
          sinh cần phải có thái độ học tập nghiêm túc, tập trung, không làm việc
          riêng, không ăn uống trong giờ học. Hãy đảm bảo lắng nghe hết nội dung
          bài học nếu thầy cô giảng bài trực tiếp theo hình thức trực tuyến trên
          các ứng dụng
        </p>
      </div>

      <div className="field">
        <div className="control has-text-centered">
          <button className="button is-normal is-primary is-rounded">
            <Link className="is-size-6" href="/online/personal-registration">
              Đăng ký học
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default OnlineNote;
