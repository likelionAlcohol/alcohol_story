import accountProfile from '../../../data/accountProfile.png';

import styled from 'styled-components';
import styles from '../css/Following.module.css';
import {useState} from 'react';


function Following({activeProfile}){
    const [follow,setFollow ] = useState(false);

    function followClick(){
        setFollow(!follow);
        console.log(follow);
    }

    return(
        <div className={styles.container}>
            <div className={styles.userInformation}>
                <img src={accountProfile} alt='프로필 사진' className={styled.profileImage}/>
                <div className={styles.userItem}>
                    <div className={styles.userId}>user_name</div>
                    <div className={styles.job}>바텐더</div>
                </div>
                <div className={styles.userCount}>
                    <div className={styles.posting}>
                        <div className={styles.postingCount}>25</div>
                        <div className={styles.postingText}>포스팅</div>
                    </div>
                    <div className={styles.follower}>
                        <div className={styles.followerCount}>200</div>
                        <div className={styles.followerText}>팔로워</div>
                    </div>
                    <div className={styles.following}>
                        <div className={styles.followingCount}>200</div>
                        <div className={styles.follwingText}>팔로잉</div>
                    </div>
            </div>
            </div>
            <div className={styles.buttons}>
                <p className={follow? styles.followClicked : styles.followBtn} onClick={followClick}>
                    <input type="button" value="팔로우" onClick={followClick}/>
                </p>
                <div className={styles.message}>
                    메시지
                </div>
            </div>

        </div>
    )
}



export default Following;