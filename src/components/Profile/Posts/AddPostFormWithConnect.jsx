import React from 'react'
import { reduxForm, reset } from 'redux-form'
import { required, maxLengthCreator, voidValue } from '../../../utils/validators/validator'
import { Textarea, createField } from '../../common/FormControls/FormControls'
import EmojiPicker from './../../common/EmojiPicker/EmojiPicker'
import { connect } from 'react-redux'
import styles from './posts.module.css'

const maxLength500 = maxLengthCreator(500)

const FormPost = (props) => {
    return <form className={styles.formPost} onSubmit={props.handleSubmit}>

        {createField('Share your great thoughts here', 'postBody', [required, maxLength500, voidValue], Textarea)}
        <EmojiPicker bottom='70%' right='0'  width='50%'
         formName='formPost' fieldName='postBody' Form={props.addPostForm} styles={styles} dispatch={props.dispatch} />
        <button className={styles.button} type='submit' >Post</button>
    </form>
    }
    const afterSumbit = (result, dispatch) => {
        dispatch(reset('formPost'))
    }
    const FormPostRedux = reduxForm({
        form: 'formPost',
        onSubmitSuccess: afterSumbit
    })(FormPost)

    const mapStateToPropse = (state) => ({
        addPostForm: state.form.formPost
    })
    const AddPostFormWithConnect = connect(mapStateToPropse)(FormPostRedux)

    export default AddPostFormWithConnect