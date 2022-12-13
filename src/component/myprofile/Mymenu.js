import styles from './Mymenu.module.css';

export default function Mymenu(){
    return(
        <div className={styles.menu}>
            <div className={styles.menuitem}>
                글 목록
            </div>
            <div className={styles.menuitem}>
                관심 주류
            </div>
            <div className={styles.menuitem}>
                관심 큐레이팅
            </div>
        </div>
    )
}