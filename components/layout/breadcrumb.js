import Link from "next/link";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Breadcrumb = () => {
  const router = useRouter();
  const pathArray = router.asPath.split("/").filter((x) => x);

  const routeLabelMap = new Map([
    ["parent", "Phụ huynh"],
    ["student", "Học sinh"],
    ["tutor", "Gia sư"],
    ["tutor-teaching", "Gia sư hiện có"],
    ["center-registration", "Đăng ký học tại trung tâm"],
    ["class-registration", "Đăng ký tìm gia sư, giáo viên"],
    ["note", "Lưu ý"],
    ["tuition", "Học phí tham khảo"],
    ["class-list", "Danh sách lớp"],
    ["rule", "Quy định"],
    ["tutor-registration", "Đăng ký gia sư"],
    ["online", "Lớp trực tuyến"],
    ["describe", "Giới thiệu"],
    ["personal-registration", "Đăng ký kèm 1:1"],
    ["group-registration", "Đăng ký nhóm"],
  ]);

  if (!pathArray.length) {
    return <></>;
  }

  return (
    <div className="container">
      <div className="section pb-0">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li className="icon-text">
              <span className="icon">
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <Link href="/">Trang chủ</Link>
            </li>
            {pathArray.map((path, index) => {
              const href = `/${pathArray.slice(0, index + 1).join("/")}`;
              return (
                <li key={path}>
                  <Link href={href}>{routeLabelMap.get(path) || path}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
