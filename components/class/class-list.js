import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import ClassCard from "./class-card";
import SearchBox from "./search-box";

import classes from "./class-list.module.css";
import Pagination from "../common/pagination";

function ClassList() {
  const [classList, setClassList] = useState([1, 2, 3, 4]);

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
          {classList.map((classItem, index) => {
            return (
              <div className="mb-4">
                <ClassCard key={index} classItem={classItem} />
              </div>
            );
          })}
          <Pagination />
        </div>
      </div>
    </section>
  );
}

export default ClassList;
