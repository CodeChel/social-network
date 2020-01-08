import React, {useEffect} from 'react'
import Preloader from '../common/Preloader/Preloader'
import styles from './News.module.css'
import Paginator from '../common/Paginator/Paginator'

const News = ({getNewsThunk, newsItems, newsCounter, isFetching, currentPage}) => {
    const portionalSize = 10
    const pageSize = 10
    useEffect(()=>{
        newsItems.length === 0 && getNewsThunk('ru', currentPage, pageSize)
    },[newsItems,getNewsThunk, currentPage])

    const onPageChanged = (p) => {
        getNewsThunk('ru', p, pageSize)
    }
    
    return isFetching
    
    ? <Preloader />
    : <div>
        <Paginator pageSize={pageSize} portionSize={portionalSize}
         currentPage={currentPage} itemsTotalCount={newsCounter} onPageChanged={onPageChanged} />
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