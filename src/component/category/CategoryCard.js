import styles from './CategoryCard.module.css';
import example from '../../data/example.png';
import starGrey from '../../data/starGrey.png';
import HeartButton from '../shared/js/HeartButton';
import {Link} from 'react-router-dom';

function CategoryCard(){
    return(
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.categoryName}>#당신께_추천하는_술</div>
        </div>

        <div className={styles.cardList}>
            <div className={styles.cardItem}>
                <div className={styles.imageWrapper}>
                    <Link to='/information'>
                        <img className={styles.image}
                            src={example}
                            alt={`이미지`}/>
                    </Link>
                    <HeartButton activeMenu='category'/>
                </div>
                <div className={styles.infoBox}>
                    <Link to='/information' className={styles.link}>
                        <div className={styles.infoName}>
                            로얄 살루트 21년산
                        </div>
                    </Link>
                    <div className={styles.reviewStars}>
                        <img  src={starGrey} alt='1' className={styles.star}></img>
                        <img  src={starGrey} alt='2' className={styles.star}></img>
                        <img  src={starGrey} alt='3' className={styles.star}></img>
                        <img  src={starGrey} alt='4' className={styles.star}></img>
                        <img  src={starGrey} alt='5' className={styles.star}></img>
                    </div>
                </div>
            </div>
            <div className={styles.cardItem}>
                <div className={styles.imageWrapper}>
                    <Link to='/information'>
                        <img className={styles.image}
                            src={example}
                            alt={`이미지`}/>
                    </Link>
                    <HeartButton activeMenu='category'/>
                </div>
                <div className={styles.infoBox}>
                    <Link to='/information' className={styles.link}>
                        <div className={styles.infoName}>
                            로얄 살루트 21년산
                        </div>
                    </Link>
                    <div className={styles.reviewStars}>
                        <img  src={starGrey} alt='1' className={styles.star}></img>
                        <img  src={starGrey} alt='2' className={styles.star}></img>
                        <img  src={starGrey} alt='3' className={styles.star}></img>
                        <img  src={starGrey} alt='4' className={styles.star}></img>
                        <img  src={starGrey} alt='5' className={styles.star}></img>
                    </div>
                </div>
            </div>
            <div className={styles.cardItem}>
                <div className={styles.imageWrapper}>
                    <Link to='/information'>
                        <img className={styles.image}
                            src={example}
                            alt={`이미지`}/>
                    </Link>
                    <HeartButton activeMenu='category'/>
                </div>
                <div className={styles.infoBox}>
                    <Link to='/information' className={styles.link}>
                        <div className={styles.infoName}>
                            로얄 살루트 21년산
                        </div>
                    </Link>
                    <div className={styles.reviewStars}>
                        <img  src={starGrey} alt='1' className={styles.star}></img>
                        <img  src={starGrey} alt='2' className={styles.star}></img>
                        <img  src={starGrey} alt='3' className={styles.star}></img>
                        <img  src={starGrey} alt='4' className={styles.star}></img>
                        <img  src={starGrey} alt='5' className={styles.star}></img>
                    </div>
                </div>
            </div>
            <div className={styles.cardItem}>
                <div className={styles.imageWrapper}>
                    <Link to='/information'>
                        <img className={styles.image}
                            src={example}
                            alt={`이미지`}/>
                    </Link>
                    <HeartButton activeMenu='category'/>
                </div>
                <div className={styles.infoBox}>
                    <Link to='/information' className={styles.link}>
                        <div className={styles.infoName}>
                            로얄 살루트 21년산
                        </div>
                    </Link>
                    <div className={styles.reviewStars}>
                        <img  src={starGrey} alt='1' className={styles.star}></img>
                        <img  src={starGrey} alt='2' className={styles.star}></img>
                        <img  src={starGrey} alt='3' className={styles.star}></img>
                        <img  src={starGrey} alt='4' className={styles.star}></img>
                        <img  src={starGrey} alt='5' className={styles.star}></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CategoryCard;