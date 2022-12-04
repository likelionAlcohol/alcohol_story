import changeImage from '../../data/changeImage.png';
import styles from './PostDetail.module.css';
import React,{useRef, useState} from 'react';
import PostBtn from './PostBtn';

function WritingPage(){
    //이미지 재설정 버튼
    
    const photoInput = useRef();

    const handleClick = () => {
        photoInput.current.click();
      };

    //이미지 preview
    const [imageSrc, setImageSrc] = useState('');

    const encodeFileToBase64 = (fileBlob) => {
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      return new Promise((resolve) => {
        reader.onload = () => {
          setImageSrc(reader.result);
          resolve();
        };
      });
    };
  
    return (
      <div className="container">

        <div className={styles.preview}>
          {imageSrc ? <img src={imageSrc} alt="preview" className={styles.previewImage}/>:<img src={changeImage} alt="preview" className={styles.previewImage}/>}
          {/* 이미지 변경 버튼 */}
          <div className={styles.imageBtn}>
            <button onClick={handleClick} className={styles.imageBtnShow}>이미지 변경</button>
            <input type="file" onChange={(e) => {
            encodeFileToBase64(e.target.files[0]);
            }} 
            style={{ display: "none" }} className={styles.inputImageText} accept='image/*' ref={photoInput} 
            />
          </div>
          <input className={styles.inputTitle} placeholder='제목을 입력하세요'/>
        </div>

        <div className={styles.mainText}>
            <textarea className={styles.contents}/>
        </div>

        <PostBtn/>

      </div>
    );
}

export default WritingPage;