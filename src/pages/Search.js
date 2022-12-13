import ContentsLayout from "../component/shared/js/ContentsLayout";
import SearchFilter from "../component/search/SearchFilter";
import {useState} from 'react';
import styles from './Search.module.css';
import GridCard from '../component/shared/js/GridCard';
import SearchMenu from '../component/search/SearchMenu';

const target=['전체','위스키', '와인', '국산주','낮은도수','높은도수'];

function Search(){
    const [filter, setFilter] = useState('전체');

    function mapFunc(data, index){
        return(
            <SearchFilter filter={filter} text={data} onClickFilter={function()
            {setFilter(data)}} className={styles.filterBtn}/>
        );
    }


    return(
        <ContentsLayout activeHeader='search'>
            <div className={styles.category}>
                {target.map(mapFunc)}
            </div>
            <SearchMenu/>
            <GridCard/>
        </ContentsLayout>
    )
}

export default Search;