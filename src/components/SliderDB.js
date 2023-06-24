import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "images/p1.png",
    caption: "Slide 1",
  },
  {
    url: "images/p2.png",
    caption: "Slide 2",
  },
  {
    url: "images/p3.png",
    caption: "Slide 3",
  },
  {
    url: "images/p4.png",
    caption: "Slide 4",
  },
  {
    url: "images/p5.png",
    caption: "Slide 5",
  },
  {
    url: "images/smart.png",
    caption: "Slide 6",
  },
];

export default function SliderDB() {
  return (
   <div className="shadow-2xl">
   <div className="slide-container indicatorss ">
      <Slide duration={2000} easing="cubic-in" indicators={false} arrows={false}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide sm:hello lg:hellow" key={index}>
            <div
              className="bg-[length:100%_175px] sm:bg-[length:100%_100%]"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <div className="h-[125px] sm:h-[350px]"></div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
    </div>
  );
}
