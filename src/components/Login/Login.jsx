import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { logInThunk } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Input, createField } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validator';
import { Redirect } from 'react-router';
import styles from '../common/FormControls/FormControls.module.css'
import loginPage from './LoginPage.module.css'

const LoginForm = ({ captchaURL, error, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Login', 'login', [required], Input)}
            {createField('Password', 'password', [required], Input, { type: 'password' })}
            <div className={loginPage.wrapperDown}>
                <label className={loginPage.container}>
                    <div className={loginPage.checkboxText}>remember me</div>
                    <Field component='input' type='checkbox' name='rememberMe' />
                    <span className={loginPage.checkmark}></span>
                </label>
                <button className={styles.buttonLogin} type='submit'>Login</button></div>
            {error && <div className={styles.errorLogIn}>{error}</div>}
            {captchaURL && <img src={captchaURL} alt='capthca' />}
            {captchaURL && createField('enter the cpathca-code', 'captcha', [required], Input)}

        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = ({ captchaURL, logInThunk, isAuth, authId }) => {
    const onSubmit = ({ login, password, rememberMe = false, captcha = null }) => {
        logInThunk({ login, password, rememberMe, captcha });
    }
    if (isAuth) {
        return <Redirect to={'/profile/' + authId} />
    }

    return <div className={loginPage.loginPage}>
        <div className={loginPage.loginFormContainer}>
            <h1>Login to SN </h1>
            <LoginReduxForm captchaURL={captchaURL} onSubmit={onSubmit} />
        </div>
    </div >
}
const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authId: state.auth.id,
    captchaURL: state.auth.captchaURL
})

export default connect(mapDispatchToProps, { logInThunk })(Login);