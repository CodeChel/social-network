import React from 'react'
import styles from './sideBar.module.css'
import  logo from '../../img/F_icon.png'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

const SideBar = (props) => {
    return <div className='sideBar'>
        <div className={styles.menuContainer}>
            <NavLink className={styles.logo} to={'/profile/' + props.authId}><img className={styles.imgLogo} src={logo} alt='logo'/></NavLink>
            <nav className={styles.navBar}>
                <ul className={styles.menu}> <span className={styles.headList}>Menu</span>
                    <li className={styles.news}><NavLink activeClassName={styles.active} to='/news'>News</NavLink></li>
                    <li className={styles.messages}><NavLink activeClassName={styles.active} to='/messages'>Messages</NavLink></li>
                    <li className={styles.friends}><NavLink activeClassName={styles.active} to='/friends'>Friends</NavLink></li>
                    <li className={styles.communities}><NavLink activeClassName={styles.active} to='/communities'>Communities</NavLink></li>
                    <li className={styles.events}><NavLink activeClassName={styles.active} to='/events'>Events</NavLink></li>
                    <li className={styles.pages}><NavLink activeClassName={styles.active} to='/pages'>Pages</NavLink></li>
                    <li className={styles.manage}><NavLink activeClassName={styles.active} to='/manage'>Manage apps</NavLink></li>
                </ul>
            </nav>
            <ul className={styles.shortcuts}><span className={styles.headList}>Shortcuts</span>
                <li className={styles.google}><a  target="_blank" rel="noopener noreferrer" href='https://www.google.com/'>Google Inc.</a></li>
                <li className={styles.combinator}><a target="_blank" rel="noopener noreferrer"  href='https://www.ycombinator.com/'>Y Combinator</a></li>
                <li className={styles.amazon}><a target="_blank" rel="noopener noreferrer"  href='https://www.amazon.com/'>Amazon</a></li>
            </ul>
        </div>
    </div>
}
const mapStateToPropst = (state) => ({
    authId: state.auth.id
})

export default connect(mapStateToPropst, null)(SideBar)