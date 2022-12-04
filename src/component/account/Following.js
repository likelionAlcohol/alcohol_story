import accountProfile from '../../data/accountProfile.png';

import styled from 'styled-components';
import styles from '../../component/account/Following.module.css';



function Following(){
    return(
        <div>
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
            <div>
                <form>
                <input type="button" value="팔로우" className={styles.followBtn}/>
                </form>
                <div className={styles.message}>
                    메시지
                </div>
            </div>

        </div>
    )
}



export default Following;