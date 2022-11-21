import styles from '../css/GridCard.module.css';
import starGrey from '../../../data/starGrey.png';
import {useState} from 'react';
import example from '../../../data/example.png';
import {Link} from 'react-router-dom';
import arrow1 from '../../../data/arrow1.png';

function GridCard(){
    return(
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.categoryName}>#당신께_추천하는_술</div>
                <Link to='#' className={styles.more}>
                    더보기<img src={arrow1} alt='더보기'/>
                </Link>
            </div>

            <div className={styles.body}>
                <div className={styles.scrollList}>
                    <div className={styles.scrollItem}>
                        <img className={styles.img}
                        src={example}
                        alt={`이미지`}/>
                        <div className={styles.infoBox}>
                            <div className={styles.infoName}>로얄 살루트 21년산</div>
                            <div className={styles.reviewStars}>
                                <img  src={starGrey} alt='1' className={styles.star}></img>
                                <img  src={starGrey} alt='2' className={styles.star}></img>
                                <img  src={starGrey} alt='3' className={styles.star}></img>
                                <img  src={starGrey} alt='4' className={styles.star}></img>
                                <img  src={starGrey} alt='5' className={styles.star}></img>
                            </div>
                            <div className={styles.infoScope}></div>
                        </div>
                    </div>
                    
                    <div className={styles.scrollItem}>
                        <img className={styles.img}
                        src={example}
                        alt={`이미지`}/>
                        <div className={styles.infoBox}>
                            <div className={styles.infoName}>로얄 살루트 21년산</div>
                            <div className={styles.reviewStars}>
                                <img  src={starGrey} alt='1' className={styles.star}></img>
                                <img  src={starGrey} alt='2' className={styles.star}></img>
                                <img  src={starGrey} alt='3' className={styles.star}></img>
                                <img  src={starGrey} alt='4' className={styles.star}></img>
                                <img  src={starGrey} alt='5' className={styles.star}></img>
                            </div>
                            <div className={styles.infoScope}></div>
                        </div>
                    </div>
                    <div className={styles.scrollItem}>
                        <img className={styles.img}
                        src={example}
                        alt={`이미지`}/>
                        <div className={styles.infoBox}>
                            <div className={styles.infoName}>로얄 살루트 21년산</div>
                            <div className={styles.reviewStars}>
                                <img  src={starGrey} alt='1' className={styles.star}></img>
                                <img  src={starGrey} alt='2' className={styles.star}></img>
                                <img  src={starGrey} alt='3' className={styles.star}></img>
                                <img  src={starGrey} alt='4' className={styles.star}></img>
                                <img  src={starGrey} alt='5' className={styles.star}></img>
                            </div>
                            <div className={styles.infoScope}></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default GridCard;