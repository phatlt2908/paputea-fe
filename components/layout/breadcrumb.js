import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumb = () => {
  const router = useRouter();
  const pathArray = router.asPath.split("/").filter((x) => x);

  const routeLabelMap = new Map([
    ["parent", "Phụ huynh"],
    ["student", "Học sinh"],
    ["tutor", "Gia sư"],
  ]);

  if (!pathArray.length) {
    return <></>;
  }

  return (
    <div className="container">
      <div className="section">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            {pathArray.map((path, index) => {
              const href = `/${pathArray.slice(0, index + 1).join("/")}`;
              const isLast = index === pathArray.length - 1;
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
