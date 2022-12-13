import RecommCard from '../component/recommendation/RecommCard';
import ContentsLayout from '../component/shared/js/ContentsLayout';

function Recommendation(){
    return(
            <ContentsLayout activeHeader="recommendation">
                <RecommCard/>
                <RecommCard/>
                <RecommCard/>
            </ContentsLayout>
    )
}

export default Recommendation;