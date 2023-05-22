import React, { useState, useEffect } from "react";

import classApi from "@/services/classApi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faSort } from "@fortawesome/free-solid-svg-icons";

import ClassCard from "./class-card";
import SearchBox from "./search-box";

import classes from "./class-list.module.css";
import Pagination from "../common/pagination";
import Loading from "../common/loading";

function ClassList() {
  const itemsPerPage = 10;

  const [isShowSearchModal, setIsShowSearchModal] = useState(false);

  const [searchCondition, setSearchCondition] = useState({
    addresses: [],
    grades: [],
    subjects: [],
    tutorTypes: [],
    classTypes: [],
  });
  const [sort, setSort] = useState("1");
  const [classList, setClassList] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadClassList(1);
  }, [, searchCondition, sort]);

  const loadClassList = (page) => {
    setCurrentPage(page);
    setClassList([]);
    setIsLoading(true);
    classApi
      .getClassList({
        query: searchCondition,
        pagination: {
          itemsPerPage: itemsPerPage,
          currentPage: page,
        },
        sort: sort,
      })
      .then((res) => {
        setClassList(res.data.classList);
        setTotalItems(res.data.totalClasses);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  };

  const handleChangePage = (page) => {
    loadClassList(page);
  };

  // Change search query only
  const handleChangeSearch = (searchQuery) => {
    setSearchCondition(searchQuery);
  };

  const handleChangeSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <section>
      <div className={classes.main + " columns section"}>
        <div className="column is-3 is-hidden-touch">
          <h5 className="subtitle is-5 icon-text">
            <span className="icon">
              <FontAwesomeIcon icon={faFilter} />
            </span>
            <span>Bộ lọc tìm kiếm</span>
          </h5>
          <SearchBox onChangeSearch={handleChangeSearch} />
        </div>
        <div
          className={
            (isShowSearchModal ? "is-active " : "") + "modal is-hidden-desktop"
          }
        >
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title icon-text">
                <span className="icon">
                  <FontAwesomeIcon icon={faFilter} />
                </span>
                <span>Bộ lọc tìm kiếm</span>
              </p>
            </header>
            <section className="modal-card-body">
              <SearchBox onChangeSearch={handleChangeSearch} />
            </section>
            <footer className="modal-card-foot">
              <button
                className="button is-primary"
                onClick={() => setIsShowSearchModal(false)}
              >
                Áp dụng
              </button>
            </footer>
          </div>
        </div>
        <div className="column is-9 is-full-touch">
          <div className="columns is-mobile is-vcentered">
            <div className="column is-hidden-desktop">
              <div
                className="button is-light is-rounded"
                onClick={() => setIsShowSearchModal(true)}
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faFilter} />
                </span>
                <span>Lọc</span>
              </div>
            </div>
            <div className="column">
              <div className="field has-addons has-addons-right">
                <div className="control has-icons-left">
                  <div className="select is-rounded">
                    <select value={sort} onChange={handleChangeSort}>
                      <option value="1">Gần đây nhất</option>
                      <option value="2">Học phí tăng dần</option>
                      <option value="3">Học phí giảm dần</option>
                    </select>
                  </div>
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faSort} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {isLoading ? (
            <Loading />
          ) : classList && classList.length ? (
            <>
              <div className="columns is-multiline">
                {classList.map((classItem, index) => {
                  return (
                    <div
                      key={index}
                      className="column is-full-desktop is-half-widescreen is-half mb-4"
                    >
                      <ClassCard classItem={classItem} isDisplayNote={true} />
                    </div>
                  );
                })}
              </div>
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                currentPage={currentPage}
                onPageChange={handleChangePage}
              />
            </>
          ) : (
            <h2 className="subtitle is-5 has-text-centered">
              Không tìm thấy lớp học nào...
            </h2>
          )}
        </div>
      </div>
    </section>
  );
}

export default ClassList;
