import MainCard from '../component/main/MainCard';
import ContentsLayout from '../component/shared/js/ContentsLayout';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Main(){
    const navigate = useNavigate();
    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
          // 페이지 끝에 도달하면 추가 데이터를 받아온다
          navigate(`/recommendation`);
          console.log('scroll');
        }
       };
      
      useEffect(() => {
        // scroll event listener 등록
        document.addEventListener("scroll", handleScroll);
        return () => {
          // scroll event listener 해제
          document.removeEventListener("scroll", handleScroll);
        };
      });
    return(
        <div>  
            <ContentsLayout activeHeader="main">
                <MainCard/>
            </ContentsLayout>
        </div>
    )

}

export default Main;

