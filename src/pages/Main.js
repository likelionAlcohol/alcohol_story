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
          navigate(`/recommendation`);
          console.log('scroll');
        }
       };
      
      useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
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

