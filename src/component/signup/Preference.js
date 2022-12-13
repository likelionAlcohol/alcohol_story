import styles from './Preference.module.css';
import Filter from './Filter';
import {Link} from 'react-router-dom';

function Preference(){

    
    return(
        <div className={styles.container}>
            <div className={styles.explanation}>선호하시는 술을 선택해주세요.</div>
            <div className={styles.categories}>
                <Filter text='위스키' className={styles.whiskey}/>
                <Filter text='와인' className={styles.wine}/>
                <Filter text='맥주' className={styles.beer}/>
                <Filter text='소주' className={styles.soju}/>
                <Filter text='사케' className={styles.sake}/>
                <Filter text='칵테일' className={styles.cocktail}/>
                <Filter text='고량주' className={styles.kaolian}/>
                <Filter text='데킬라' className={styles.tequila}/>
                <Filter text='샴페인' className={styles.champagne}/>
                <Filter text='발렌타인' className={styles.valentine}/>
                <Filter text='메켈린' className={styles.mecallan}/>
                <Filter text='조니워커' className={styles.johnnieWalker}/>
                <Filter text='탱커레이' className={styles.tanqueray}/>
                <Filter text='힙노틱' className={styles.hpnotiq}/>
                <Filter text='리몬첼로' className={styles.limoncello}/>
                <Filter text='짐빔' className={styles.jimBeam}/>
                <Filter text='엑스레이티드' className={styles.xrated}/>
                <Filter text='돔페르뇽' className={styles.domPerignon}/>
                <Filter text='로얄살루트' className={styles.royalSalute}/>
                <Filter text='몽키숄더' className={styles.monkeyShoulder}/>
                <Filter text='예거마에스터' className={styles.jaegermeister}/>
                <Filter text='젝다니엘' className={styles.jackDaniel}/>
                <Filter text='아그와' className={styles.agwa}/>
                <Filter text='탈라스커' className={styles.talisker}/>
                <Filter text='글렌피딕' className={styles.glenfiddich}/>
        </div>
        <div className={styles.btnSection}>
            <Link to='/' className={styles.nextBtn}>다음</Link>
        </div>
    </div>
    )
}

export default Preference;