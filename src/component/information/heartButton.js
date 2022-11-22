import styled from 'styled-components';
import heartIcon from '../../data/heart.png';
import heartIconFilled from '../../data/heartFill.png';
const Heart = styled.img`

`
function heartButton({like, onClick}){
    return(
        <Heart src={like?heartIconFilled:heartIcon} onClick={onClick}/>
    )
}

export default heartButton;