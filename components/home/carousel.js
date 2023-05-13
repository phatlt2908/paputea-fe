import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Link from "next/link";

import carouselConst from "@/constants/carouselConst";
import classes from "./carousel.module.css";

function Carousel() {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  return (
    <div>
      <div class={classes.carousel}>
        <div class={classes.fade}>
          <img
            className="w-100"
            src="https://www.w3schools.com/howto/img_nature_wide.jpg"
          />
          <div class={classes.text}>Caption Text</div>
        </div>

        <div class={classes.fade}>
          <img
            className="w-100"
            src="https://www.w3schools.com/howto/img_snow_wide.jpg"
          />
          <div class={classes.text}>Caption Two</div>
        </div>

        <div class={classes.fade}>
          <img
            className="w-100"
            src="https://www.w3schools.com/howto/img_mountains_wide.jpg"
          />
          <div class={classes.text}>Caption Three</div>
        </div>

        <a class={classes.prev} onclick="plusSlides(-1)">
          ❮
        </a>
        <a class={classes.next} onclick="plusSlides(1)">
          ❯
        </a>
      </div>
      <br />

      <div className="has-text-centered">
        <span class={classes.dot} onclick="currentSlide(1)"></span>
        <span class={classes.dot} onclick="currentSlide(2)"></span>
        <span class={classes.dot} onclick="currentSlide(3)"></span>
      </div>
    </div>
  );
}

export default Carousel;
