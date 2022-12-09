import styles from './write.module.css';
import React, {useState} from 'react';
import styled from 'styled-components';
import AddPage from './AddPage';

const Page = styled.div`
  padding: 28px;
  font-family: 'Pretendard';
`

function WriteInfo() {

    const [pageNum, setPageNum] = useState([0])

    const addDiv = () => {
      let pageArr = [...pageNum]
      let num = pageArr.slice(-1)[0]
      num += 1
      pageArr[num] = num
      setPageNum(pageArr)
    }
    
    return (
    <Page>
      <AddPage pageNum={pageNum} />
      <section className={styles.buttonArea} id='buttonPlace'>
          <button className={styles.addPageButton} onClick={addDiv}>페이지 추가</button>
          <button className={styles.finishButton} >완료</button>
      </section>
    </Page>
    )
}
  


export default WriteInfo;