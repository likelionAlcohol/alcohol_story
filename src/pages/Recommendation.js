import GridCard from '../component/shared/js/GridCard';
import ContentsLayout from '../component/shared/js/ContentsLayout';

function Recommendation(){
    return(
        <div>
            <ContentsLayout activeHeader="recommendation">
                <GridCard/>
                <GridCard/>
                <GridCard/>
            </ContentsLayout>
        </div>
    )
}

export default Recommendation;