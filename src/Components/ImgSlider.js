import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

function ImgSlider() {
  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    sliderToShow: 1,
    sliderToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...setting}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="no Image" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="no Image" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="no Image" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="no Image" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  ul li button {
    &:before {
      color: grey;
    }
  }

  li.slick-active button::before {
    color: whitesmoke;
  }
  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  img {
    border: 3px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 1px 2px grey;
    transition: 250ms;

    &:hover {
      border: 2px solid whitesmoke;
    }
  }
`;
