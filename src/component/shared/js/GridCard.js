import styles from '../css/GridCard.module.css';
import ExampleImage from '../../../data/1924.png';
import HeartButton from '../js/HeartButton';

export default function GridCard(){
    return(
        <div className={styles.cardBody}>
            <div className={styles.itemList}>
                <div className={styles.item}>
                    <img src={ExampleImage} alt='사진' className={styles.image}/>
                    <div className={styles.infoBox}>
                        <div className={styles.title}>사람들이 모르는 1924 이야기</div>
                        <HeartButton className={styles.heartBtn}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={ExampleImage} alt='사진' className={styles.image}/>
                    <div className={styles.infoBox}>
                        <div className={styles.title}>사람들이 모르는 1924 이야기</div>
                        <HeartButton className={styles.heartBtn}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={ExampleImage} alt='사진' className={styles.image}/>
                    <div className={styles.infoBox}>
                        <div className={styles.title}>사람들이 모르는 1924 이야기</div>
                        <HeartButton className={styles.heartBtn}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={ExampleImage} alt='사진' className={styles.image}/>
                    <div className={styles.infoBox}>
                        <div className={styles.title}>사람들이 모르는 1924 이야기</div>
                        <HeartButton className={styles.heartBtn}/>
                    </div>
                </div>
            </div>
        </div>
    )
}