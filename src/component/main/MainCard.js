import styled from 'styled-components';
import img1 from '../../data/image1.png';
import img2 from '../../data/image2.png';
import img3 from '../../data/image3.png';
import Slide from './Slide';
import React, {useState, useRef, useEffect} from 'react';
import {VscCircleFilled} from 'react-icons/vsc';
import styles from './MainCard.module.css';


const Container = styled.div`
  width: 300px;
  margin: 25px;
  padding-top: 25px;
`;

const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;


const TOTAL_SLIDES = 2;

export default function MainCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

return (
    <Container>
      <SliderContainer ref={slideRef}>
        <Slide img={img1}/>
        <Slide img={img2}/>
        <Slide img={img3}/>
      </SliderContainer>
      {/* <Button onClick={prevSlide}></Button>
      <Button onClick={nextSlide}></Button> */}
    </Container>
  );
}