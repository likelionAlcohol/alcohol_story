import styles from '../post/PostBtn.module.css';

export default function PostBtn(){
    return(
        <div className={styles.container}>
            <div className={styles.add}>
                추가
            </div>
            <div className={styles.complete}>
                완료
            </div>
        </div>
    )
}