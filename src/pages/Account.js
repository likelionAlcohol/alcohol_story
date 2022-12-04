import ContentsLayout from '../component/shared/js/ContentsLayout';
import Following from '../component/account/Following';
import AccountCard from '../component/account/AccountCard';

function Account(){
    return(
        <ContentsLayout>
            <Following/>
            <AccountCard/>
        </ContentsLayout>
    )
};

export default Account;