import ContentsLayout from '../component/shared/js/ContentsLayout';
import SignupPage from '../component/signup/SignupPage';

function Signup(){
    return(
        <ContentsLayout activeHeader="signup">
            <SignupPage/>
        </ContentsLayout>
    )
}

export default Signup;