import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom';
import back from '../../data/back.png';
import searchIcon from '../../data/searchIcon.png';
import {useState} from 'react';

export default function SearchHeader(){
    
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    function onClickReset(){
        setSearch('');
    }

    function onChange(event){
        setSearch(event.target.value);
    }


    return(
        <Container>
            <IMG src={back} onClick={()=>navigate(-1)}/>
            <Input placeholder='검색어를 입력하세요.'  onChange={onChange} value={search}/>
            <Search src={searchIcon} onClick={onClickReset}/>
        </Container>
    )
};

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
    justify-content: center;
    height: 55px;
    padding: 20px 20px 10px 20px;
`;

const Input = styled.input`
    padding: 8px 0px 8px 15px;
    display: flex;
    width: 254px;
    border:none;
    background: #F2F2F2;
    margin-left: 5px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
`

const Search = styled.img`
flex: 1;
margin-left: 10px;
width:auto;
height:auto;
max-width:40px;
max-height: 40px;
`