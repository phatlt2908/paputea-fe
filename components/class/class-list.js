import { useState, useEffect } from "react";

import classApi from "@/services/classApi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faSort } from "@fortawesome/free-solid-svg-icons";

import ClassCard from "./class-card";
import SearchBox from "./search-box";

import classes from "./class-list.module.css";
import Pagination from "../common/pagination";

function ClassList() {
  const [searchCondition, setSearchCondition] = useState({
    addresses: [],
    grades: [],
    subjects: [],
  });
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    classApi
      .getClassList(searchCondition)
      .then((res) => {
        setClassList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
          <SearchBox />
        </div>
        <div>
          <div className="field has-addons has-addons-right">
            <div className="control has-icons-left">
              <div className="select is-rounded">
                <select>
                  <option>Ngày đăng gần đây nhất</option>
                  <option>Học phí tăng dần</option>
                  <option>Học phí giảm dần</option>
                </select>
              </div>
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faSort} />
              </span>
            </div>
          </div>
          <div className="columns is-multiline is-desktop">
            {classList.map((classItem, index) => {
              return (
                <div key={index} className="column is-half-desktop mb-4">
                  <ClassCard classItem={classItem} />
                </div>
              );
            })}
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  );
}

export default ClassList;
