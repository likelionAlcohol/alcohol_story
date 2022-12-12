import styles from './LoginPage.module.css';
import {Link} from 'react-router-dom';

function LoginPage(){
    return(
        <div className={styles.container}>
            <Link to='/' className={styles.logo}>술 이야기</Link>
            <div className={styles.loginInput}>
                <input type='text' placeholder='아이디' className={styles.id}/>
                <input type='text' placeholder='비밀번호' className={styles.password}/>
            </div>
            <button className={styles.loginBtn}>
                로그인
            </button>
            <div className={styles.loginFooter}>
                <Link to='/signup' className={styles.signup}>회원가입</Link>
                <Link to='#' className={styles.idSearch}>아이디 찾기</Link>
                <Link to='#' className={styles.pwSearch}>비밀번호 찾기</Link>
            </div>
        </div>
    )
}

export default LoginPage;