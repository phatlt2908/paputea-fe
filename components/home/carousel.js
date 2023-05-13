import Image from "next/image";

import { useState, useEffect } from "react";
import Link from "next/link";

import carouselConst from "@/constants/carouselConst";
import classes from "./carousel.module.css";

function Carousel() {
  const carouselList = carouselConst.CAROUSEL_LIST;
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides();
  }, []);

  useEffect(() => {
    showSlides();
  }, [slideIndex]);

  const plusSlides = (n) => {
    if (slideIndex + n > carouselList.length) {
      setSlideIndex(1);
    } else {
      setSlideIndex(slideIndex + n);
    }
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = () => {
    let slides = carouselList;
    if (slideIndex > slides.length) {
      setSlideIndex(1);
    }
    if (slideIndex < 1) {
      setSlideIndex(slides.length);
    }
  };

  return (
    <div className={"columns is-gapless " + classes.main}>
      <div className={classes.left + " column is-three-quarters"}>
        <div className={classes.carousel}>
          {carouselList.map((carousel, index) => {
            return (
              index + 1 == slideIndex && (
                <div key={index} className={classes.fade}>
                  {/* <img className="w-100" src={carousel.imageUrl} /> */}
                  <Image
                    src={carousel.imageUrl}
                    alt="carousel"
                    className={classes.poster}
                    width={1000}
                    height={1000}
                    priority
                  />
                </div>
              )
            );
          })}

          <a className={classes.prev} onClick={() => plusSlides(-1)}>
            ❮
          </a>
          <a className={classes.next} onClick={() => plusSlides(1)}>
            ❯
          </a>
        </div>

        <div className={classes.footer}>
          {carouselList.map((carousel, index) => {
            return (
              <a
                href="javascript:void(0)"
                key={index}
                className={`${classes.dot} ${
                  index + 1 == slideIndex ? classes.active : ""
                }`}
                onClick={() => currentSlide(index + 1)}
              ></a>
            );
          })}
        </div>
      </div>
      <div className={classes.right + " column is-one-quarter is-hidden-touch"}>
        <div className="section">
          <h3 className="title is-3 mb-1">
            {carouselList[slideIndex - 1].title}
          </h3>
          <p>{carouselList[slideIndex - 1].text}</p>
          {carouselList[slideIndex - 1].buttonLink && (
            <Link
              href={carouselList[slideIndex - 1].buttonLink}
              className="mt-5 button is-primary is-rounded"
            >
              {carouselList[slideIndex - 1].buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
