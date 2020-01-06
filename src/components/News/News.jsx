import React, {useEffect} from 'react'
import Preloader from '../common/Preloader/Preloader'
import styles from './News.module.css'

const News = ({getNewsThunk, newsItems, newsCounter, isFetching}) => {
    useEffect(()=>{
        newsItems.length === 0 && getNewsThunk()
    },[newsItems,getNewsThunk])

    return isFetching
    
    ? <Preloader />
    : <div>
        { newsItems.map(
            
            (n, index) => <div key={index}>
                <div><img height='100px' width='100px' src={n.urlToImage} alt='newsImage' /></div>
                <div className={styles.content}>
                    <a className={styles.header} href={n.url} target='_blank' rel='noopener noreferrer'>
                        {n.title}
                    </a>
                    <div>
                        <span>{n.publishedAt}</span>
                    </div>
                    <div className={styles.description}>{n.content}</div>
                    <div>{n.author}</div>
                </div>
            </div>
        )

        }
    </div>
}
export default News