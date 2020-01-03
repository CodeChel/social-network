import React from 'react';
import { connect } from 'react-redux';
import { logOutThunk } from './../../redux/auth-reducer';
import Footer from './Footer';
import { getIsAuth, getLogin, getAvatar } from './footer-selector';


class FooterContainer extends React.Component {
    
    render() {
        return <Footer {...this.props} />
    }

}
const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state),
    avatar: getAvatar(state)
})
export default connect(mapStateToProps, { logOutThunk })(FooterContainer);