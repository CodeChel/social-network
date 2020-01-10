import React, { useEffect } from 'react'
import Preloader from '../common/Preloader/Preloader'
import styles from './News.module.css'
import Paginator from '../common/Paginator/Paginator'
import newsImage from '../../assets/img/news.jpg'
import { formatTimeNews } from '../../utils/timeFormat'

const News = ({ getNewsThunk, newsItems, newsCounter, isFetching, currentPage }) => {
    const portionalSize = 10
    const pageSize = 10
    useEffect(() => {
        newsItems.length === 0 && getNewsThunk('ru', currentPage, pageSize)
    }, [newsItems, getNewsThunk, currentPage])

    const onPageChanged = (p) => {
        getNewsThunk('ru', p, pageSize)
    }

    return <div className={styles.newsPage}>
        <Paginator pageSize={pageSize} portionSize={portionalSize} currentPage={currentPage}
            itemsTotalCount={newsCounter} onPageChanged={onPageChanged} />

        {isFetching
            ? <Preloader />
            : <div className={styles.wrapperNews}>

                {newsItems.map((n, index) =>
                    <div className={styles.containerNews} key={index}>
                        <div><img className={styles.imgNews} src={n.urlToImage ? n.urlToImage : newsImage} alt='newsImage' /></div>
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <a href={n.url} className={styles.newsAcnhor} target='_blank' rel='noopener noreferrer'>
                                    {n.title}
                                </a>
                            </div>
                            <div className={styles.timeContainer}>
                                <span className={styles.time}>{formatTimeNews(n.publishedAt)}</span>
                            </div>
                            <div className={styles.description}>{n.description}</div>
                            <div className={styles.nameContainer}>{n.source.name}</div>
                        </div>
                    </div>
                )

                }
            </div>}
    </div>
}
export default News