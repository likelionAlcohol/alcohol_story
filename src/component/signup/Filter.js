import styles from './Filter.module.css';
import {useState} from 'react';


function Filter({text}){
    const [category, setCategory] = useState(false)
    const onClickCategory = () => {
        setCategory(!category);
    }

    return(
        <button className={category?styles.clickedBtn:styles.cateBtn} 
        onClick={onClickCategory}>{`#`}{text}</button>
    )
};

export default Filter;