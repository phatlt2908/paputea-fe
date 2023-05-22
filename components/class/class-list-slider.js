import { useState, useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import classApi from "@/services/classApi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClassCard from "./class-card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function ClassListSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1215,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1105,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [classList, setClassList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadClassList();
  }, []);

  const loadClassList = () => {
    setIsLoading(true);
    classApi
      .getClassList({
        query: null,
        pagination: {
          itemsPerPage: 10,
          currentPage: 1,
        },
        sort: "1",
      })
      .then((res) => {
        setClassList(res.data.classList);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <section className="hero is-medium">
        <div className="hero-body pt-2">
          <div className="level">
            <h1 className="level-left title is-1 is-size-3-touch color-primary">
              Lớp mới chưa giao
            </h1>
            <div className="level-right">
              <Link className="button is-ghost" href={`/tutor/class-list`}>
                Xem tất cả
              </Link>
            </div>
          </div>
          <div>
            <Slider {...settings}>
              {classList.map((classItem, index) => {
                return (
                  <div
                    key={index}
                    className="column mb-4"
                  >
                    <ClassCard classItem={classItem} isDisplayNote={false} />
                  </div>
                );
              })}
              <div className="column mb-4 py-6 is-flex is-justify-content-center is-align-items-center">
                <Link className="button is-primary is-rounded is-large" href={`/tutor/class-list`}>
                  <span>Xem tất cả</span>
                  <span class="icon">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClassListSlider;
