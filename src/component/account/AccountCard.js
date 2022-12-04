import styles from './AccountCard.module.css';
import example from '../../data/example.png';

function AccountCard(){
    return(
        <div className={styles.body}>
                {/* <div className={styles.contentsList}>
                    <div className={styles.contentsItem}>
                        <img className={styles.img}
                        src={example}
                        alt={`이미지`}/>
                        <div className={styles.infoBox}>
                            <div className={styles.infoName}>사람들이 모르는 1924 이야기</div>
                        </div>
                    </div>
                </div> */}
        </div>
    )
}

export default AccountCard;