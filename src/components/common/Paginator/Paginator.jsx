
import React, { useState } from 'react'
import styles from './paginator.module.css'




const Paginator = ({ itemsTotalCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pageCount = Math.ceil(itemsTotalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize


    return <div className={styles.pagintor}>
        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>{'<'}</button>
        }
        {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map((p, index) => {
                const classPage = currentPage === p ? styles.selectedPage + ' ' + styles.items : styles.items
                return currentPage === p
                    ? <div key={index} role='button' className={classPage}>{p}</div>
                    : <div key={index}  role='button' className={classPage}
                        onClick={(e) => {
                            onPageChanged(p)
                        }
                        }
                    >{p}</div>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }} >{'>'}</button>
        }
    </div>

}

export default Paginator;      