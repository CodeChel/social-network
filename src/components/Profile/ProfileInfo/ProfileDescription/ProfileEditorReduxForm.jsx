import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { createField, Input, Textarea } from '../../../common/FormControls/FormControls'
import { required } from '../../../../utils/validators/validator'
import { Prompt } from 'react-router'
import styles from './AboutProfile.module.css'

const ProfileEditor = ({ handleSubmit, profile, ...props}) => {
    return <form onSubmit={handleSubmit}>
       
        <h3 className={styles.nameInfo}>Full name</h3>
        {createField('Full Name', 'fullName', [required], Input, false, null)}
        <label><h3 className={styles.nameInfo}>Looking for a Job:</h3> </label>
        <div>
            <label><Field name="lookingForAJob" component={'input'} type="radio" value='true' /> Yes</label>
            <label><Field name="lookingForAJob" component={'input'} type="radio" value='false' checked={true} /> No</label>
        </div>
        <h3 className={styles.nameInfo}>Skills:</h3>
        {createField(null, 'lookingForAJobDescription', [required], Textarea, false, null, null, { colls: 10, rows: 30 })}
        <h3 className={styles.nameInfo}>About me:</h3>
        {createField(null, 'aboutMe', [required], Textarea, false, null, null, { colls: 10, rows: 30 })}
        <h2 className={styles.nameInfo}>Contacts:</h2>
        {Object.keys(profile.contacts).map((key) => {
            return <div key={key}>
                <h3 className={styles.nameField}>
                    {key}
                </h3>
                {createField(key, 'contacts.' + key, null, Input, false, null, { value: profile.contacts[key] })}
            </div>
        })
        }
        <Prompt
            when={props.dirty }
            message='You have unsaved changes, are you sure you want to leave?'
        />
        <button  className={styles.save}>save</button>
    </form>
}
 const ProfileEditorReduxForm = reduxForm({ form: 'edit-profile' })(ProfileEditor)

 export default ProfileEditorReduxForm