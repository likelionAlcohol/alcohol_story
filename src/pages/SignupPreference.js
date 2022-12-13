import ContentsLayout from "../component/shared/js/ContentsLayout";
import Preference from "../component/signup/Preference";

function SignupPreference(){
    return(
        <ContentsLayout activeHeader="signup">
            <Preference/>
        </ContentsLayout>
    )
}

export default SignupPreference;