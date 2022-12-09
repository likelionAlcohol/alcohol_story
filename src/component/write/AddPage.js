import React from "react"
import styles from './write.module.css'


const AddPage = (props) => {

  return (
    <div>
      {props.pageNum && props.pageNum.map((item, i) => (
        <div className={styles.addedPage} key={i}>
            <section className={styles.titleArea}>
                <div className={styles.titleTitle}>제목</div>
                <input className={styles.titleInput} type='text' placeholder='제목을 작성해주세요' />
            </section>
        
            <section className={styles.photoArea}>
                <div className={styles.photoTitle}>사진</div>
                <div className={styles.photoInput}></div>
            </section>
        
            <section className={styles.contentArea}>
                <div className={styles.contentTitle}>내용</div>
                <textarea className={styles.contentInput} placeholder='어떤 내용을 작성하실건가요?' />
            </section>
            <div className={styles.pageInfo}>
                -{i+1} 페이지-
            </div>
        </div>
      ))}
    </div>
  )
}

export default AddPage;