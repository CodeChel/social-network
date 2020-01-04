import React, { useState } from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import {  change } from 'redux-form'


const EmojiPickerForm = ({formName, fieldName, Form, styles, dispatch, ...props}) => {
    const [emojiPickerMode, setEPMode] = useState(false);

    const addEmoji = (e) => {
        const sym = e.unified.split('-')
        const codesArray = []

        sym.map(el => codesArray.push('0x' + el))
        const emoji = String.fromCodePoint(...codesArray)

        dispatch(change(formName, fieldName, Form.values ? Form.values[fieldName] + emoji : emoji));
    }

    return <div onClick={() => { setEPMode(true) }} onMouseEnter={() => { setEPMode(true) }} onMouseLeave={() => { setEPMode(false) }}>
        <span role='button' className={styles.buttomEmoji}></span>
        {emojiPickerMode 
        && <Picker style={{ position: 'absolute', bottom: props.bottom, right: props.right, 
            width: props.width}}  onSelect={addEmoji} native={true} showPreview={false} showSkinTones={false} title='' />}
    </div>
  
}
export const EmojiPickerStatus = ({status, setStatus, styles}) =>{
    const [emojiPickerMode, setEPMode] = useState(false)

    const addEmoji = (e) => {
        const sym = e.unified.split('-')
        const codesArray = []

        sym.map(el => codesArray.push('0x' + el))
        const emoji = String.fromCodePoint(...codesArray)
        setStatus(status + emoji);      
    }
    return <div onClick={() => { setEPMode(true) }}  onMouseEnter={() => { setEPMode(true) }} onMouseLeave={() => { setEPMode(false) }}>
        <span role='button' className={styles.buttomEmoji}></span>
        {emojiPickerMode && <Picker style={{ position: 'absolute', bottom: '-320%', right: '0px', width: '100%' }}  showPreview={false}  
        showSkinTones={false} emojiSize={16} 
        title=''  onSelect={addEmoji} native={true} />}
    </div>

}
export default EmojiPickerForm;


