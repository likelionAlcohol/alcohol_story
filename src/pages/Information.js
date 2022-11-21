import InfoLayout from '../component/shared/js/InfoLayout';
import ContentsLayout from '../component/shared/js/ContentsLayout';


function Information(){
    return(
        <div>
            <ContentsLayout activeHeader="information">
                <InfoLayout/>
            </ContentsLayout>
            
        </div>
    )
}

export default Information;