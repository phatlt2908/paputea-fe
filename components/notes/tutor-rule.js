import Link from "next/link";

function TutorNote() {
  return (
    <section className="container section">
      <div className="content">
        <h1 className="is-size-3-touch">QUY ĐỊNH KHI GIA SƯ NHẬN LỚP</h1>
        <p>
          Gia sư / giáo viên khi hoàn tất{" "}
          <Link href="/tutor/tutor-registration">đăng kí, </Link> hồ sơ của bạn
          sẽ được hiển thị trên website để phục vụ tìm kiếm của học sinh và phụ
          huynh
        </p>

        <p>
          Gia sư / giáo viên chọn lớp phù hợp và đăng ký nhận lớp. Trung tâm sẽ
          tiến hành liên lạc với phụ huynh trao đổi, nếu phụ huynh đồng ý trung
          tâm sẽ tiến hành giao lớp. Gia sư/ giáo viên chọn hình thức chuyển phí
          cho trung tâm trước buổi dạy đầu tiên. Lưu ý: Trung tâm chỉ nhận đúng
          30% tiền học phí tháng đầu tiên, không phát sinh thêm phí. Phí sẽ được
          hoàn lại 25% nếu dạy chưa quá 2 tuần và hoàn lại 15% nếu dạy không quá
          2 tháng.
        </p>

        <ul>
          <li>
            Chuyển khoản vào số tài khoản sau: Ngân hàng BIDV
            stk 58010000979153 (chủ tk: Nguyễn Thị Thanh Cúc)
          </li>
          <li>
            Đến trực tiếp trung tâm tại 43/21/4 Vườn Lài, An Phú Đông, Quận 12,
            TP. Hồ Chí Minh để đóng phí nhận lớp. SĐT liên lạc:{" "}
            <a href="tel:0941388990">0941-388-990</a>
          </li>
        </ul>

        <article className="message is-warning">
          <div className="message-body">
            <h5 className="title is-5">
              NHỮNG TRƯỜNG HỢP TRUNG TÂM KHÔNG HOÀN PHÍ
            </h5>
            <p>
              Trung tâm sẽ không hoàn bất kỳ khoản phí nào nếu Gia Sư tự ý bỏ
              lớp với các lý do sau:
            </p>
            <ul>
              <li>Khoảng cách đi lại xa</li>
              <li>Không có phương tiện di chuyển</li>
              <li>Không sắp xếp được thời gian như dự kiến</li>
              <li>
                Phụ huynh phản ánh về cư xử hay tác phong đi dạy thiếu chuyên
                nghiệp, đi trễ về sớm, xin nghỉ nhiều
              </li>
              <li>
                Đặc biệt là làm việc riêng, sử dụng điện thoại trong giờ dạy
              </li>
            </ul>
            <p>
              Trường hợp có bất kỳ trở ngại nào làm gián đoạn việc nhận lớp đến
              nhận lớp như không gặp được học sinh, thời gian học bị thay đổi,
              số lượng học sinh không đúng cũng như địa điểm thay đổi so với đã
              thống nhất từ ban đầu, gia sư/giáo viên cần báo gấp về trung tâm
              theo số điện thoại sau: 0941388990
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default TutorNote;
