import styles from '../css/Header.module.css';
import profile_image from '../../../data/profile.png';
import {BiSearch} from 'react-icons/bi';

function Header(){
    return(
        <div className={styles.container}>
            <div className={styles.logo}>술 이야기</div>
            <BiSearch className={styles.search}/>
            <img src={profile_image} alt="프로필 사진" className={styles.profile}/>
        </div>
    )
}

export default Header;