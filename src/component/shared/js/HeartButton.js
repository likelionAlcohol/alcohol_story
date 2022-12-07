import styled from 'styled-components';
import heartIcon from '../../../data/heart.png';
import heartIconFilled from '../../../data/heartFill.png';
import {useState} from 'react';
const Heart = styled.img`

`
function HeartButton(){
    const [like, setLike] = useState(false)
    
    function toggleLike(){
        setLike(!like);
    }
    return(
        <Heart src={like?heartIconFilled:heartIcon} onClick={toggleLike}/>
    )
}

export default HeartButton;