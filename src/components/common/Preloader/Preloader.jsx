import preloader from './../../../assets/img/Rolling-1s-200px.svg';
import React from 'react';
import styles from './preloader.module.css'

const Preloader = () =>{
    return <div className={styles.preloaderContainer}>
        <img className={styles.preloader} src={preloader} alt="preloader"/>
    </div>
}
export default Preloader;