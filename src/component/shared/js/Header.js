import styles from '../css/Header.module.css';
import profile_image from '../../../data/profile.png';
import { Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import styled from 'styled-components';
import React from 'react';
import back from '../../../data/back.png'; 


function Header({activeHeader}){

    const navigate = useNavigate();


    return(
        <Container activeHeader={activeHeader}>
            <IMG src={back} onClick={()=>navigate(-1)} activeHeader={activeHeader}/>
            {((activeHeader==='main')||(activeHeader==='recommendation'))?<Logo to='/' activeHeader={activeHeader}>술 이야기</Logo>:<Back onClick={()=>navigate(-1)}>{activeHeader==='signup'?'회원가입':'이전'}</Back>}
            <Link to='#'><Search src={activeHeader==='main'?"data/searchIconWhite.png":"data/searchIcon.png"} activeHeader={activeHeader}/></Link>
            <Link to='#'><Profile src={profile_image} activeHeader={activeHeader}/></Link>
        </Container>
    )
}

const IMG = styled.img`
    padding-right: 16px;
    display: ${props => (props.activeHeader === 'main') || (props.activeHeader === 'recommendation')?'none':'block'};
`

const Container = styled.div`
position: fixed;
z-index: 10;
top: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
height: 55px;
padding: 20px ;
border-bottom: ${props => props.activeHeader === 'signup'?'none':'2px solid black'};
background-color: ${props => props.activeHeader === 'main'?'black':'white'};
`

const Logo = styled(Link)`
flex: 5;
font-size: 25px;
font-family: 'Noto Serif KR', serif;
text-decoration: none;
color: ${props=> props.activeHeader === 'main'?'white':'black'};
`

const Back = styled(Link)`
flex: 5;
font-size: 20px;
font-weight: 600;
color: black;
text-decoration: none;
font-family: 'Pretendard';
`

const Search = styled.img`
flex: 1;
margin-right: 10px;
width:auto;
height:auto;
max-width:40px;
max-height: 40px;
display: ${props => (props.activeHeader === "signup")?'none':'block'};
`

const Profile = styled.img`
flex: 1;
width: 35px;
height: 35px;
object-fit: cover;
display: ${props => (props.activeHeader === "signup")?'none':'block'};
`

export default Header;