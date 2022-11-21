import styles from '../css/ReviewCard.module.css'
import starGrey from '../../../data/starGrey.png';

function ReviewCard(){
    return(
        <div className={styles.reviewCard}>
            <div className={styles.scrollList}>
                <div className={styles.scrollItem}>
                    <div className={styles.itemBox}>
                        <div className={styles.itemBoxInfo}>
                            <div className={styles.reviewTitle}>
                                맛있어요
                            </div>
                            <div className={styles.reviewDate}>
                                1주전
                            </div>
                            <div className={styles.reviewStars}>
                                <img  src={starGrey} alt='1' className={styles.star}></img>
                                <img  src={starGrey} alt='2' className={styles.star}></img>
                                <img  src={starGrey} alt='3' className={styles.star}></img>
                                <img  src={starGrey} alt='4' className={styles.star}></img>
                                <img  src={starGrey} alt='5' className={styles.star}></img>
                            </div>
                            <div className={styles.reviewNickname}>
                                user_1
                            </div>
                        </div>

                        <div className={styles.reviewContents}>
                            너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,
                        </div>
                    </div>
                </div>
                <div className={styles.scrollItem}>
                    <div className={styles.itemBox}>
                    <div className={styles.itemBoxInfo}>
                            <div className={styles.reviewTitle}>
                                맛있어요
                            </div>
                            <div className={styles.reviewDate}>
                                1주전
                            </div>
                            <div className={styles.reviewStars}>
                                <img  src={starGrey} alt='1' className={styles.star}></img>
                                <img  src={starGrey} alt='2' className={styles.star}></img>
                                <img  src={starGrey} alt='3' className={styles.star}></img>
                                <img  src={starGrey} alt='4' className={styles.star}></img>
                                <img  src={starGrey} alt='5' className={styles.star}></img>
                            </div>
                            <div className={styles.reviewNickname}>
                                user_1
                            </div>
                        </div>
                        <div className={styles.reviewContents}>
                            너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,
                        </div>
                    </div>
                </div>
                <div className={styles.scrollItem}>
                    <div className={styles.itemBox}>
                    <div className={styles.itemBoxInfo}>
                            <div className={styles.reviewTitle}>
                                맛있어요
                            </div>
                            <div className={styles.reviewDate}>
                                1주전
                            </div>
                            <div className={styles.reviewStars}>
                                <img  src={starGrey} alt='1' className={styles.star}></img>
                                <img  src={starGrey} alt='2' className={styles.star}></img>
                                <img  src={starGrey} alt='3' className={styles.star}></img>
                                <img  src={starGrey} alt='4' className={styles.star}></img>
                                <img  src={starGrey} alt='5' className={styles.star}></img>
                            </div>
                            <div className={styles.reviewNickname}>
                                user_1
                            </div>
                        </div>
                        <div className={styles.reviewContents}>
                            너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,너무 맛있어요,
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ReviewCard;