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
        // <div className={styles.container}>
        //     {{activeHeader}==='main'||'recommendation'?<Link to="/" className={styles.logo}>술 이야기</Link>:<Link to="/" className={styles.logo}>이전</Link>}
        //     <BiSearch className={styles.search}/>
        //     <img src={profile_image} alt="프로필 사진" className={styles.profile}/>
        // </div>


        <Container style={activeHeader==='main'?{backgroundColor:'black'}:{backgroundColor:'white'}}>
            <IMG src={back} onClick={()=>navigate(-1)} style={activeHeader==='recommendation'?{display:'none'}:(activeHeader==='main'?{display:'none'}:{display:'block'})}/>
            {activeHeader==='main'?<Logo to='/' style={{color:'white'}}>술 이야기</Logo>:(activeHeader==='recommendation'?<Logo to='/'>술 이야기</Logo>:<Back onClick={()=>navigate(-1)}>이전</Back>)}
            <Link to='#'><Search src={activeHeader==='main'?"data/searchIconWhite.png":"data/searchIcon.png"}/></Link>
            <Link to='#'><Profile src={profile_image}/></Link>
        </Container>
    )
}

const IMG = styled.img`
    padding-right: 16px;
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
padding: 20px;
border-bottom: 2px solid black;
`

const Logo = styled(Link)`
flex: 5;
font-size: 25px;
color: black;
font-family: 'Noto Serif KR', serif;
text-decoration: none;
`

const Back = styled(Link)`
flex: 5;
font-size: 20px;
font-weight: 600;
color: black;
text-decoration: none;
`

const Search = styled.img`
flex: 1;
margin-right: 10px;
width:auto;
height:auto;
max-width:40px;
max-height: 40px;
`

const Profile = styled.img`
flex: 1;
width: auto;
height: auto;
max-width: 35px;
max-height: 35px;
`

export default Header;