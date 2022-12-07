import GridCard from '../component/shared/js/GridCard';
import ContentsLayout from '../component/shared/js/ContentsLayout';

function Recommendation(){
    return(
            <ContentsLayout activeHeader="recommendation">
                <GridCard/>
                <GridCard/>
                <GridCard/>
            </ContentsLayout>
    )
}

export default Recommendation;