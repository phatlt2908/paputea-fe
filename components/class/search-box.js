function SearchBox() {
  return (
    <div>
      <aside className="menu">
        <p className="menu-label">Trạng thái</p>
        <ul className="menu-list">
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">Chưa giao</span>
              </label>
            </a>
          </li>
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">Đang xác nhận</span>
              </label>
            </a>
          </li>
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">Đã giao</span>
              </label>
            </a>
          </li>
        </ul>
        <p className="menu-label">Khối lớp</p>
        <ul className="menu-list">
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">Lớp 1, 2, 3, 4</span>
              </label>
            </a>
          </li>
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">Lớp 5, 6, 7, 8</span>
              </label>
            </a>
          </li>
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">Lớp 9, 10, 11</span>
              </label>
            </a>
          </li>
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">Lớp 12</span>
              </label>
            </a>
          </li>
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">Luyện thi đại học</span>
              </label>
            </a>
          </li>
        </ul>
        <p className="menu-label">Khu vực</p>
        <ul className="menu-list">
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">Khánh Hòa</span>
              </label>
            </a>
          </li>
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">Lâm Đồng</span>
              </label>
            </a>
          </li>
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">Bình Dương</span>
              </label>
            </a>
          </li>
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">TP Hồ Chí Minh</span>
              </label>
            </a>
          </li>
        </ul>
        <p className="menu-label">Trình độ yêu cầu</p>
        <ul className="menu-list">
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">Sinh viên</span>
              </label>
            </a>
          </li>
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">Giáo viên</span>
              </label>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default SearchBox;
