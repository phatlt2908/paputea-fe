import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

function Pagination({ itemsPerPage, totalItems, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
  }, [itemsPerPage, totalItems]);

  const handleChangePage = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <nav
      className="pagination is-rounded is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a
        disabled={currentPage <= 1}
        onClick={() => handleChangePage(currentPage - 1)}
        className="pagination-previous control"
      >
        <span className="icon is-small mr-2">
          <FontAwesomeIcon icon={faAnglesLeft} />
        </span>
        <span>Trang trước</span>
      </a>
      <a
        disabled={currentPage == totalPages}
        onClick={() => handleChangePage(currentPage + 1)}
        className="pagination-next control"
      >
        <span>Trang sau</span>
        <span className="icon is-small ml-2">
          <FontAwesomeIcon icon={faAnglesRight} />
        </span>
      </a>
      <ul className="pagination-list">
        {currentPage >= 3 && (
          <li>
            <a className="pagination-link" onClick={() => handleChangePage(1)}>
              1
            </a>
          </li>
        )}
        {currentPage >= 4 && (
          <span className="pagination-ellipsis">&hellip;</span>
        )}
        {currentPage >= 2 && (
          <li>
            <a
              className="pagination-link"
              onClick={() => handleChangePage(currentPage - 1)}
            >
              {currentPage - 1}
            </a>
          </li>
        )}
        <li>
          <a className="pagination-link is-current">{currentPage}</a>
        </li>
        {currentPage <= totalPages - 1 && (
          <li>
            <a
              className="pagination-link"
              onClick={() => handleChangePage(currentPage + 1)}
            >
              {currentPage + 1}
            </a>
          </li>
        )}
        {currentPage <= totalPages - 3 && (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        )}
        {currentPage <= totalPages - 2 && (
          <li>
            <a
              className="pagination-link"
              onClick={() => handleChangePage(totalPages)}
            >
              {totalPages}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
