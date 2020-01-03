import React from 'react';
import styles from './footer.module.css';
import { NavLink } from 'react-router-dom'

const Footer = (props) => {
    
    return <div className={styles.footer}>
        {props.isAuth
            ? <div className={styles.authBlock}>
                <img alt='avatar' className={styles.avatar} src={props.avatar} />
                <div className={styles.login}>
                    <div className={styles.authLogin}>
                        {props.login}
                        <div className={styles.menuContainer}>
                            <div className={styles.arrowMenu}></div>
                            <div className={styles.authMenu}>
                                <div className={styles.itemMenu} onClick={props.logOutThunk}>logOut</div>
                                <NavLink className={styles.itemMenu} to='/profile'>  <div className={styles.myProfile}> My profile  </div> </NavLink>
                            </div>
                        </div>

                    </div>
                    <div className={styles.you}>
                        its you
                    </div>

                </div>

            </div>
            : <div>you are not authorized</div>
        }
    </div>
}


export default Footer;
