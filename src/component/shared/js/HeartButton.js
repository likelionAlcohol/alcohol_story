import styled, {css} from 'styled-components';
import heartIcon from '../../../data/heart.png';
import heartIconFilled from '../../../data/heartFill.png';
import {useState} from 'react';

function HeartButton({activeMenu}){
    const [like, setLike] = useState(false)
    
    function toggleLike(){
        setLike(!like);
    }
    return(
        <Heart activeMenu={activeMenu} src={like?heartIconFilled:heartIcon} onClick={toggleLike}/>
    )
}

const Heart = styled.img`
    position: ${props => props.activeMenu === 'category'&& 'absolute'};
    filter: ${props => props.activeMenu === 'category'&& 'brightness(0) invert(1)'};
    bottom: ${props => props.activeMenu === 'category'&& '10px'};
    right: ${props => props.activeMenu === 'category'&& '10px'};
`


export default HeartButton;