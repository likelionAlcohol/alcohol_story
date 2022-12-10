import styles from './InfoCard.module.css';
import ReviewCard from '../shared/js/ReviewCard';
import infoImage from '../../data/infoImage.jpg';
import HeartButton from '../shared/js/HeartButton';
import starGrey from '../../data/starGrey.png';
import {Link} from 'react-router-dom';


function InfoCard(){
    return(
        <div className={styles.infoCard}>
            <div className={styles.imageBox}>
                <img  className={styles.image} src={infoImage} alt={`information_image`}/>
            </div>
            <div className={styles.mainInfo}>
                <div className={styles.mainInfoHeader}>
                    <div className={styles.title}>로얄 살루트 21년 산</div>
                    <HeartButton/>
                </div>
                <div className={styles.subHeader}>
                    <div className={styles.category}>위스키</div>
                    <div className={styles.stars}>
                        <img  src={starGrey} alt='1' className={styles.star}></img>
                        <img  src={starGrey} alt='2' className={styles.star}></img>
                        <img  src={starGrey} alt='3' className={styles.star}></img>
                        <img  src={starGrey} alt='4' className={styles.star}></img>
                        <img  src={starGrey} alt='5' className={styles.star}></img>
                    </div>
                </div>
                
            </div>
            <div className={styles.subInfo}>

                <div className={styles.container}>
                    <div className={styles.subTitle}>information</div>
                    <div className={styles.detailBox}>
                        <div className={styles.subDetail}>
                            <div className={styles.detailTitle}>상세 분류</div>
                            <div className={styles.detailContents}>블렌디드 스카치 위스키</div>
                        </div>
                        <div className={styles.subDetail}>
                            <div className={styles.detailTitle}>도수</div>
                            <div className={styles.detailContents}>40%</div>
                        </div>
                    </div>
                    
                </div>

                <div className={styles.container}>
                    <div className={styles.subTitle}>tasting note</div>
                    <div className={styles.detailBox}>
                        <div className={styles.detailNote}>first:</div>
                        <div className={styles.detailNote}>middle:</div>
                        <div className={styles.detailNote}>finish:</div>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.reviewHeader}>
                        <div className={styles.headerTitle}>평가 및 리뷰</div>
                        <Link to='#' className={styles.more}>모두보기</Link>
                    </div>
                    <ReviewCard/>
                </div>
            </div>

        </div>
    )
}

export default InfoCard;