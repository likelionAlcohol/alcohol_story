import styled, { keyframes } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import React, { Component } from 'react';
import scrollIcon from '../../data/Union.png';

const upDown = keyframes`
    0% {margin-top: 0px;}
    100%{margin-top: 10px;}
`;

const Container = styled.div`
  background-color: grey;
  padding-bottom: 30px;
  height: 700px;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, white, white 80%, transparent);
-webkit-mask-image: linear-gradient(to bottom, white, white 80%, transparent);
`;

const StyledSlider = styled(Slider)`
  .slick-dots{
    bottom:-50px;
    margin-top:200px;
  }
  .slick-slide div{
    outline: none;
    
  }

  margin: 45px 0px 105px;


`;




const ImageContainer = styled.div`
  margin: 0px 10px;
  background-color: black;
  border: 10px solid black;
  border-radius: 12px;
`;



const Image = styled.img`
min-width:100%;
min-height:100%;
max-width:100%;
max-height:100%;
mask-image: linear-gradient(to bottom, black, black 60%, transparent);
-webkit-mask-image: linear-gradient(to bottom, black, black 60%, transparent);
`;

const Scroll = styled.div`
display:flex;
align-items: center;
justify-content:center;
flex-direction: column;
`

const ScrollText = styled.div`
font-weight: 400;
font-size: 12px;
line-height: 14px;

color: #FFFFFF;
margin: 10px;
animation: ${upDown} 0.7s linear 0s infinite alternate; margin-top: 0;

`

const ScrollIcon = styled.img`
animation: ${upDown} 0.7s linear 0s infinite alternate; margin-top: 0;


`


const img1 = require('../../data/image1.png');
const img2 = require('../../data/image2.png');
const img3 = require('../../data/image3.png');

const imgitems = [
    {id:0, url: img1},
    {id:1, url: img2},
    {id:2, url: img3},
]


export default class MainCard extends Component {
  render(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
  
    };
    return (
        <Container>
        <StyledSlider {...settings}>
        {imgitems.map(item => {
          return (
            <div key={item.id}>
              <ImageContainer>
                <Image src={item.url}/>

              </ImageContainer>
            </div>
          );
        })}
          </StyledSlider>
          <Scroll>
            <ScrollText>
              SCROLL DOWN
            </ScrollText>
            <ScrollIcon src={scrollIcon}/>
          </Scroll>
      </Container>
      );
  }

}