import InfoLayout from '../component/information/InfoLayout';
import ContentsLayout from '../component/shared/js/ContentsLayout';


function Information(){
    return(
            <ContentsLayout activeHeader="information">
                <InfoLayout/>
            </ContentsLayout>
    )
}

export default Information;