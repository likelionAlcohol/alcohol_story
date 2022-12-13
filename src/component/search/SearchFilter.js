import styles from './SearchFilter.module.css';

export default function SearchFilter({filter, text, onClickFilter}){
    return(
        <button className={filter === text?styles.clickedBtn:styles.cateBtn}
        onClick={onClickFilter}>
            {'#'}{text}
        </button>
    )
}