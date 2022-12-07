import styled, { keyframes } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import React, { Component } from 'react';
import scrollIcon from '../../data/Union.png';
import styles from './MainCard.module.css';
import Star from '../../data/Star.png';
import {Link} from 'react-router-dom';



//사진
const img1 = require('../../data/image1.png');
const img2 = require('../../data/image2.png');
const img3 = require('../../data/image3.png');

//user name
const user1 = `user1`;
const user2 = `user2`;
const user3 = `user3`;

//user profile image
const profile1 = require('../../data/accountProfile.png');
const profile2 = require('../../data/accountProfile.png');
const profile3 = require('../../data/accountProfile.png');

//title
const title1 = `사람들이 모르는 조니워커 이야기`;
const title2 = `사람들이 모르는 와인 이야기`;
const title3 = `사람들이 모르는 진빔 이야기`;

//summary
const summary1 = `대중적으로 인기가 많은 조니워커 나는 얼마나 알고 마시고 있는걸까?`;
const summary2 = `대중적으로 인기가 많은 와인 나는 얼마나 알고 마시고 있는걸까?`;
const summary3 = `대중적으로 인기가 많은 진빔 나는 얼마나 알고 마시고 있는걸까?`;


const imgitems = [
    {id:0, url: img1, user: user1, profile: profile1, title: title1, summary: summary1},
    {id:1, url: img2, user: user2, profile: profile2, title: title2, summary: summary2},
    {id:2, url: img3, user: user3, profile: profile3, title: title3, summary: summary3},
]


export default class MainCard extends Component {
  render(){
    //slider 설정 값
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
  
    };
    //화면에 나타내기
    return (
        <Container>
        <StyledSlider {...settings}>
        {imgitems.map(item => {
          return (
            <div key={item.id}>
              <ImageContainer>
                <img src={item.url} alt={`${item.user}의 게시물`} className={styles.cardImage}/>
                <div className={styles.containerInfo}>
                  <div className={styles.profileBox}>
                    <img src={item.profile} alt={`${item.user}의 프로필`}/>
                    <div className={styles.userName}>{item.user}</div>
                    <img src={Star} alt={'즐겨찾기'} className={styles.star}/>
                  </div>
                  <div className={styles.containerText}>
                    <div className={styles.title}>
                      {item.title}
                    </div>
                    <div className={styles.summary}>
                      {item.summary}
                    </div>
                  </div>
                </div>
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

//styled-components

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
  
  position:relative;
`;


//스크롤 다운 표시 (+애니메이션)


const upDown = keyframes`
    0% {margin-top: 0px;}
    100%{margin-top: 10px;}
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

