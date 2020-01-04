import React, { useState, useEffect, useRef } from 'react'

import styles from './profileStatus.module.css'
import { EmojiPickerStatus } from '../../../common/EmojiPicker/EmojiPicker'

const ProfileStatusWithHooks = ({ updateStatus, isMyPage, ...props }) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const nodeStatus = useRef()


    useEffect(() => {
        const handlerClick = (e) => {

            if (nodeStatus.current && e.target !== nodeStatus.current && !(nodeStatus.current.contains(e.target))) {
                document.removeEventListener('click', handlerClick)
                setEditMode(false)
                setStatus(props.status)
            }
        }

        if (nodeStatus.current) {
            document.addEventListener('click', handlerClick)
        }
        else {
            document.removeEventListener('click', handlerClick)
        }
        return () => {
            document.removeEventListener('click', handlerClick)

        }
    }, [editMode, props.status])

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const outEditMode = (e) => {
        updateStatus(status)
        setEditMode(false)
    }



    return <div className={styles.statusWrap}>
        {isMyPage
            ? <div className={styles.statusContainer} >
                <div>
                    <span onClick={() => { setEditMode(true) }} className={styles.status}>{(props.status && (props.status.length > 40 ? props.status.slice(0, 40) + '...' : props.status)) || 'set a status message'}</span>
                </div>
                {editMode &&
                    <div className={styles.changeStatusContainer} ref={nodeStatus}>
                        <div ><input className={styles.inputStatus} autoFocus={true} onChange={(e) => { setStatus(e.currentTarget.value) }} value={status} /></div>
                        <EmojiPickerStatus status={status} setStatus={setStatus} styles={styles} />
                        <button className={styles.saveButton} onClick={() => { outEditMode() }}>Save</button>
                    </div>}
            </div>
            : <div >
                {
                    props.status
                        ? props.status.length > 100 ? props.status.slice(0, 100) : props.status
                        : null
                }
            </div>
        }

    </div>

}

export default ProfileStatusWithHooks