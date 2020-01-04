
import React from 'react'
import { reduxForm, reset } from 'redux-form'
import { createField } from '../../common/FormControls/FormControls'
import { required, voidValue } from '../../../utils/validators/validator'
import EmojiPicker from '../../common/EmojiPicker/EmojiPicker'
import { connect } from 'react-redux'
import styles from './Messages.module.css'


const AddMessageForm = (props) => {

    const onKeyHandler = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            if (e.target.name === `message${props.userId}`) {
                e.preventDefault()
                props.handleSubmit()

            }
        }
    }

    return <form onKeyDown={onKeyHandler} onSubmit={props.handleSubmit}>
        {createField(`write message to ${props.name}`, `message${props.userId}`, [required, voidValue], 'textarea', null, null )}

        {props.dirty && <button className={styles.buttonForm} type="submit"></button>}
        <EmojiPicker bottom='100%' right='0'  width='50%'
         formName='addMessageForm' fieldName={`message${props.userId}`} Form={props.addMessageForm} styles={styles} dispatch={props.dispatch} />



    </form>
}
const afterSumbit = (result, dispatch) => {
    dispatch(reset('addMessageForm'))
}
const AddMessageFormRedux = reduxForm({
    form: 'addMessageForm',
    onSubmitSuccess: afterSumbit
})(AddMessageForm)
const mapStateToPropse = (state) => ({
    addMessageForm: state.form.addMessageForm
})

 const AddMessageFormWithConnect = connect(mapStateToPropse)(AddMessageFormRedux)

 export default AddMessageFormWithConnect