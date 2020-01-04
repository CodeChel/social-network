import React, { useEffect } from 'react'

import User from './User'
import styles from './Friends.module.css'
import PopUp from '../common/PopUp/popUp'
import PopUpMessage from '../common/PopUp/PopUpMessage'

const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, isMessageMode, messageId, ...props }) => {
    const getMoreUsers = () => {

        const list = document.getElementById('user-list')
        if (list && window.scrollY + window.innerHeight > list.clientHeight + list.offsetTop - 100
            && !props.isFetching && Math.ceil(totalUsersCount / pageSize) >= currentPage + 1) {
            props.getMoreUsers(currentPage + 1, pageSize)
        }

    }

    useEffect(() => {


        window.addEventListener('scroll', getMoreUsers)
        return () => {
            window.removeEventListener('scroll', getMoreUsers)
        }
    })
    return <div className={styles.mainContainer}>
        <div className={styles.container} id='user-list'>
            {
                users.map(u => <User setMessageMode={props.setMessageMode} user={u} key={u.id} followingInProgress={props.followingInProgress} 
                    unfollow={props.unFollowThunk} follow={props.followThunk} />)
            }
        </div>
        {

            isMessageMode
                ? <PopUp user={users.filter(u => u.id === messageId)[0]} Component={PopUpMessage} closePopup={() => { props.setMessageMode(false, null) }} />
                : null
        }
    </div>
}

export default Users