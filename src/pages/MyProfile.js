import Following from '../component/shared/js/Following';
import ContentsLayout from '../component/shared/js/ContentsLayout';
import Mymenu from '../component/myprofile/Mymenu';
import GridCard from '../component/shared/js/GridCard';

function MyProfile(){
    return(
        <ContentsLayout>
            <Following activeProfile='myprofile'/>
            <Mymenu/>
            <GridCard/>
        </ContentsLayout>
    )
};

export default MyProfile;