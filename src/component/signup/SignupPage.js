import styles from './SignupPage.module.css'; 
import {Link} from 'react-router-dom';

function SignupPage(){
    return(
        <div className={styles.container}>
            <input className={styles.email} type='text' placeholder='이메일'/>
            <input className={styles.password} type='text' placeholder='비밀번호'/>
            <input className={styles.accountName} type='text' placeholder='계정 이름'/>
            <Link to='/signuppreference' className={styles.nextBtn}>다음</Link>
        </div>
    )
}

export default SignupPage;