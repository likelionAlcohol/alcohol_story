import MainCard from '../component/main/MainCard';
import ContentsLayout from '../component/shared/js/ContentsLayout';

function Main(){
    return(
        <div>  
            <ContentsLayout activeHeader="main">
                <MainCard/>
            </ContentsLayout>
        </div>
    )

}

export default Main;