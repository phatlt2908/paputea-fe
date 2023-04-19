import { useState, useEffect } from "react";
import staticApi from "@/services/staticApi";

import { formatCurrency } from "@/utils/string-util";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function TuitionInfo() {
  const [addressList, setAddressList] = useState([]);
  const [addressId, setAddressId] = useState([]);

  useEffect(() => {
    staticApi
      .getAddressList()
      .then((res) => {
        res.data.shift();
        setAddressList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleAddressId = (e) => {
    setAddressId(e.target.value);
  };

  return (
    <>
      <h1 className="title is-1 is-size-3-touch color-primary">
        Bảng phí tham khảo tại Trung tâm Paputea đối với dạy kèm 1:1
      </h1>
      <div className="field">
        <label className="label">Chọn khu vực</label>
        <div className="control has-icons-left">
          <div className="select">
            <select value={addressId} onChange={handleAddressId}>
              {addressList.map(function (address, i) {
                return (
                  <option value={address.id} key={i}>
                    {address.name}
                  </option>
                );
              })}
            </select>
          </div>
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
        </div>
      </div>

      <div className="table-container">
        <table className="table is-striped is-hoverable is-fullwidth is-bordered">
          <thead>
            <tr>
              <th rowSpan="2"></th>
              <th colSpan="2">2 buổi/tuần</th>
              <th colSpan="2">3 buổi/tuần</th>
            </tr>
            <tr>
              <th>Sinh viên</th>
              <th>Giáo viên</th>
              <th>Sinh viên</th>
              <th>Giáo viên</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Lớp 1, 2, 3, 4</th>
              <td>{formatCurrency(800000)}</td>
              <td>{formatCurrency(1000000)}</td>
              <td>{formatCurrency(1200000)}</td>
              <td>{formatCurrency(1500000)}</td>
            </tr>
            <tr>
              <th>Lớp 5, 6, 7, 8</th>
              <td>{formatCurrency(900000)}</td>
              <td>{formatCurrency(1100000)}</td>
              <td>{formatCurrency(1350000)}</td>
              <td>{formatCurrency(1650000)}</td>
            </tr>
            <tr>
              <th>Lớp 9, 10, 11</th>
              <td>{formatCurrency(1000000)}</td>
              <td>{formatCurrency(1200000)}</td>
              <td>{formatCurrency(1500000)}</td>
              <td>{formatCurrency(1800000)}</td>
            </tr>
            <tr>
              <th>Lớp 12</th>
              <td>{formatCurrency(1300000)}</td>
              <td>{formatCurrency(1400000)}</td>
              <td>{formatCurrency(1650000)}</td>
              <td>{formatCurrency(2100000)}</td>
            </tr>
            <tr>
              <th>Luyện thi đại học</th>
              <td>{formatCurrency(1300000)}</td>
              <td>{formatCurrency(1400000)}</td>
              <td>{formatCurrency(1650000)}</td>
              <td>{formatCurrency(2100000)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="field">
        <div className="control has-text-centered">
          <button className="button is-normal is-primary is-rounded">
            <Link className="is-size-6" href="/parent/class-registration">Đăng ký</Link>
          </button>
        </div>
      </div>

      <article className="message is-warning">
        <div className="message-header">
          <p>Lưu ý</p>
        </div>
        <div className="message-body">
          <div className="content">
            <ul>
              <li>
                Học phí trên áp dụng cho{" "}
                <strong>1 tháng từ thời điểm gia sư bắt đầu dạy </strong>
                học viên
              </li>
              <li>
                Học phí trên áp dụng cho gia sư, giáo viên{" "}
                <strong>
                  dạy trực tiếp tại nhà phụ huynh, hoặc tại trung tâm
                </strong>
                , các lớp online học phí sẽ thấp hơn
              </li>
              <li>
                Ngoài ra, học phí <strong>tăng hay giảm</strong> còn phụ thuộc
                vào <strong>số môn học, số người học và địa điểm học</strong>
              </li>
              <li>
                Học phí trên áp dụng cho giáo viên có{" "}
                <strong>bằng cử nhân</strong> của các trường đại học khác hoặc
                giáo viên có <strong>bằng đại học sư phạm</strong>
              </li>
              <li>
                Đối với thạc sỹ, giáo viên thâm niên, giáo viên dạy tại trường
                có kinh nghiệm dạy kèm, mức học phí sẽ cao hơn
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}

export default TuitionInfo;
