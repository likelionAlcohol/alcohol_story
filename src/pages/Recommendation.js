import Header from '../component/shared/js/Header';
import GridCard from '../component/shared/js/GridCard';
import ContentsLayout from '../component/shared/js/ContentsLayout';

function Recommendation(){
    return(
        <div>
            <Header/>
            <ContentsLayout>
                <GridCard/>
                <GridCard/>
                <GridCard/>
            </ContentsLayout>
        </div>
    )
}

export default Recommendation;