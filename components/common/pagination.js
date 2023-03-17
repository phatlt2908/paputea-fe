import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

function Pagination() {
  return (
    <nav
      className="pagination is-rounded is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a className="pagination-previous control">
        <span className="icon is-small mr-2">
          <FontAwesomeIcon icon={faAnglesLeft} />
        </span>
        <span>Trang trước</span>
      </a>
      <a className="pagination-next control">
        <span>Trang sau</span>
        <span className="icon is-small ml-2">
          <FontAwesomeIcon icon={faAnglesRight} />
        </span>
      </a>
      <ul className="pagination-list">
        <li>
          <a className="pagination-link" aria-label="Goto page 1">
            1
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 45">
            45
          </a>
        </li>
        <li>
          <a
            className="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
          >
            46
          </a>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 47">
            47
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 86">
            86
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
