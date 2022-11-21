import styles from '../css/ContentsLayout.module.css';
import Header from './Header';
import {useState} from 'react';


function ContentsLayout({children, activeHeader}){



    return(
        <div className={styles.layout}>
            <Header activeHeader={activeHeader}/>
            <div className={styles.container}>{children}</div>
        </div>
    )
}

export default ContentsLayout;