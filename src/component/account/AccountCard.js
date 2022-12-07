import styles from './AccountCard.module.css';
import example from '../../data/example.png';
import HeartButton from '../shared/js/HeartButton';

function AccountCard(){

    return(
        <div className={styles.body}>
                <div className={styles.contentsList}>
                    <div className={styles.contentsItem}>
                        <img className={styles.image}
                        src={example}
                        alt={`이미지`}/>
                        <div className={styles.titleBox}>
                            <div className={styles.title}>사람들이 모르는 1924 이야기</div>
                            <HeartButton className={styles.heart}/>
                        </div>
                    </div>
                    <div className={styles.contentsItem}>
                        <img className={styles.image}
                        src={example}
                        alt={`이미지`}/>
                        <div className={styles.titleBox}>
                            <div className={styles.title}>사람들이 모르는 1924 이야기</div>
                            <HeartButton className={styles.heart}/>
                        </div>
                    </div>
                    <div className={styles.contentsItem}>
                        <img className={styles.image}
                        src={example}
                        alt={`이미지`}/>
                        <div className={styles.titleBox}>
                            <div className={styles.title}>사람들이 모르는 1924 이야기</div>
                            <HeartButton className={styles.heart}/>
                        </div>
                    </div>
                    <div className={styles.contentsItem}>
                        <img className={styles.image}
                        src={example}
                        alt={`이미지`}/>
                        <div className={styles.titleBox}>
                            <div className={styles.title}>사람들이 모르는 1924 이야기</div>
                            <HeartButton className={styles.heart}/>
                        </div>
                    </div>
                    <div className={styles.contentsItem}>
                        <img className={styles.image}
                        src={example}
                        alt={`이미지`}/>
                        <div className={styles.titleBox}>
                            <div className={styles.title}>사람들이 모르는 1924 이야기</div>
                            <HeartButton className={styles.heart}/>
                        </div>
                    </div>
                    <div className={styles.contentsItem}>
                        <img className={styles.image}
                        src={example}
                        alt={`이미지`}/>
                        <div className={styles.titleBox}>
                            <div className={styles.title}>사람들이 모르는 1924 이야기</div>
                            <HeartButton className={styles.heart}/>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default AccountCard;