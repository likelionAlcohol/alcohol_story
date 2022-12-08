import './write.css';
import React from 'react';
import newPage from './write';

export class WriteInfo extends React.Component {



  render() {
    
      return (
        <div id='one'>
          <div className='page'>
            <section className='content'>
              
              <h2 className='titleWrite'>제목</h2>
              <input className='titleText' type='text' placeholder='제목을 작성해주세요' />
            </section>

            <section className='sidebar'>
              <div className='photoTitle'>사진</div>
              <div className='photoInput'></div>
            </section>

            <section className='sidebar'>
              <div className='photoTitle'>내용</div>
              <input type='text' className='contentText' placeholder='어떤 내용을 작성하실건가요?' />
            </section>

            <section className='sidebar' id='buttonPlace'>
              <button className='addPageButton' onClick={newPage}>페이지 추가</button>
              <button className='finish' >완료</button>
            </section>
        </div>
      </div>
      )
  }
  
}

export default WriteInfo
