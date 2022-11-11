import styles from '../css/GridCard.module.css';
import {ImStarFull} from 'react-icons/im';
import {useState} from 'react';
import example from '../../../data/example.png';

function GridCard(){
    return(
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.categoryName}>#당신께_추천하는_술</div>
                <div className={styles.more}>더보기</div>
            </div>

            <div className={styles.body}>
                <div className={styles.scrollList}>
                    <div className={styles.scrollItem}>
                        <img className={styles.img}
                        src={example}
                        alt={`이미지`}/>
                        <div className={styles.infoBox}>
                            <div className={styles.infoName}>로얄 살루트 21년산</div>
                            <ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/>
                            <div className={styles.infoScope}></div>
                        </div>
                    </div>
                    
                    <div className={styles.scrollItem}>
                        <img className={styles.img}
                        src={example}
                        alt={`이미지`}/>
                        <div className={styles.infoBox}>
                            <div className={styles.infoName}>로얄 살루트 21년산</div>
                            <ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/>
                            <div className={styles.infoScope}></div>
                        </div>
                    </div>
                    <div className={styles.scrollItem}>
                        <img className={styles.img}
                        src={example}
                        alt={`이미지`}/>
                        <div className={styles.infoBox}>
                            <div className={styles.infoName}>로얄 살루트 21년산</div>
                            <ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/>
                            <div className={styles.infoScope}></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default GridCard;