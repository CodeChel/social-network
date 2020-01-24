import React, { useEffect } from 'react'
import styles from './Friends.module.css'
import avatar from '../../assets/img/ava.jpg'
import { NavLink } from 'react-router-dom'




const User = ({ user, follow, unfollow, followingInProgress, setMessageMode }) => {
    useEffect(() => {

        return () => {
            setMessageMode(false, user.id)
        };
    }, [setMessageMode, user.id]);

    return <div className={styles.userContainer}>

        <div className={styles.avatar}>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : avatar} alt="" className={styles.usersAvatar} />
            </NavLink>
        </div>
        <div className={styles.userMenu}>
            <div className={styles.hideMenu}>
                {user.followed
                    ? <button onClick={() => unfollow(user.id)}
                        disabled={followingInProgress.some(id => id === user.id)}>Unfollow</button>
                    : <button onClick={() => follow(user.id)}
                        disabled={followingInProgress.some(id => id === user.id)}>Follow</button>
                }
                <button onClick={() => { setMessageMode(true, user.id) }}>Send Message</button>
                <button>Show Friends</button>
            </div>
        </div>

        <div className={styles.userInfo}>
            <span>
                <NavLink to={'/profile/' + user.id}> <div className={styles.userName}>{user.name}</div></NavLink>
            </span>
            <span className={styles.userStatus}>
                {
                    user.status
                        ? user.status.length > 20 ? user.status.slice(0, 20) + '...' : user.status
                        : 'no status'
                }
            </span>
        </div>

    </div>


}

export default User;