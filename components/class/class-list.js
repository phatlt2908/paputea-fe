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
    setCurrentPage(1);
    loadClassList(1);
  }, [, searchCondition, sort]);

  const loadClassList = (page) => {
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
    setCurrentPage(page);
    loadClassList(page);
  };

  const handleChangeSearch = (searchQuery) => {
    setSearchCondition(searchQuery);
  };

  const handleChangeSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <section className="container">
      <div className={classes.main + " section"}>
        <div className={classes.side}>
          <h5 className="subtitle is-5 icon-text">
            <span className="icon">
              <FontAwesomeIcon icon={faFilter} />
            </span>
            <span>Bộ lọc tìm kiếm</span>
          </h5>
          <SearchBox onChangeSearch={handleChangeSearch} />
        </div>
        <div>
          <div className="columns is-vcentered">
            {/* <div className="column">
              <h1 className="title is-4">Lớp mới chưa giao</h1>
            </div> */}
            <div className="column field has-addons has-addons-right">
              <div className="control has-icons-left">
                <div className="select is-rounded">
                  <select value={sort} onChange={handleChangeSort}>
                    <option value="1">Ngày đăng gần đây nhất</option>
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
          {isLoading ? (
            <Loading />
          ) : classList && classList.length ? (
            <>
              <div className="columns is-multiline is-desktop">
                {classList.map((classItem, index) => {
                  return (
                    <div key={index} className="column is-half-desktop mb-4">
                      <ClassCard classItem={classItem} />
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
