import styles from '../css/ContentsLayout.module.css';
import Header from './Header';
import {useState} from 'react';
import SearchHeader from '../../search/SearchHeader';


function ContentsLayout({children, activeHeader}){
    return(
        <div className={styles.layout}>
            {activeHeader==='search'?<SearchHeader className={styles.header}/>:<Header className={styles.header} activeHeader={activeHeader}/>}
            <div className={styles.container}>{children}</div>
        </div>
    )
}

export default ContentsLayout;