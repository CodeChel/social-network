import React from 'react'
import styles from './posts.module.css'

import avatar from '../../../assets/img/ava.jpg'
import Preloader from '../../common/Preloader/Preloader'
import { NavLink } from 'react-router-dom'
import AddPostFormWithConnect from './AddPostFormWithConnect'



const Posts = (props) => {


    const sortPost = (e) => {
        e.target.value === 'New' ? props.sortByTime() : props.sortByLikes()
    }

    return props.profile
        ? <div className={styles.postsContainer}>
            <AddPostFormWithConnect onSubmit={props.sendPostThunk} />
            {props.posts.length ?
                <div className={styles.selectSort}>Sort by <select className={styles.selectSort} onChange={sortPost}>
                    <option >New</option>
                    <option >Popular</option>
                </select></div> : null}
            {props.posts.map((p) => <div key={p.id}>
                <div key={p.id} className={styles.itemPost}>
                    <div className={styles.headerPost}>
                        <NavLink to={`/profile/${p.userId}`}> <img className={styles.avatar} src={p.avatar || avatar} alt="avatar" /></NavLink>

                        <div className={styles.nameBlock}>
                            <NavLink to={`/profile/${p.userId}`}> <div className={styles.name}>{p.name}</div></NavLink>
                            <div className={styles.timePost}>{p.timeFormat}</div>
                        </div>
                    </div>
                    <div className={styles.postBody}>
                        {p.text}
                    </div>
                    <div className={styles.menu}><span className={styles.hidenMenu} onClick={() => { props.deletePost(p.id) }} ><div className={styles.menuItem}>Delete post</div></span></div>
                    <div className={styles.postFooter}>

                        <div className={styles.likesBody}>
                            <div className={styles.likesWrapper} onClick={() => { p.liked ? props.likesToggle(false, p.id) : props.likesToggle(true, p.id) }}>
                                <div className={styles.likes + ' ' + (p.liked && styles.liked)}></div>
                                <span className={styles.likesCount + ' ' + (p.liked && styles.likesCountLiked)}>{p.likesCount > 0 && p.likesCount}</span>  </div>
                        </div>
                    </div>
                </div>

            </div>)}
        </div>
        : <Preloader />
}

export default Posts