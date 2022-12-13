import styles from './SearchMenu.module.css';

export default function SearchMenu(){
    return(
        <div className={styles.menu}>
            <div className={styles.menuitem}>
                주류
            </div>
            <div className={styles.menuitem}>
                큐레이팅
            </div>
        </div>
    )
}