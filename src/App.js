import React from 'react'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import { withRouter, HashRouter, Route, Redirect } from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContainer'
import News from './components/News/News'
import Communities from './components/Communities/Communities'
import Events from './components/Events/Events'
import Pages from './components/Pages/Pages'
import Manage from './components/Manage/Manage'
import UsersContainer from './components/Friends/UsersContainer'
import FooterContainer from './components/Footer/FooterContainer'
import Login from './components/Login/Login'
import { connect, Provider } from 'react-redux'
import { initializeAppThunk } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import { compose } from 'redux'
import store from './redux/redux-store'
import withSuspense from './hoc/withSuspense'
import { Switch } from 'react-router'

const MessagesContainer = React.lazy(() => import('./components/Messages-container/MessagesContainer'))

class App extends React.Component {

  componentDidMount() {
    this.props.initializeAppThunk()
  }
  render() {
    
    if (!this.props.initialized) return <Preloader />
    return (
      <div className='app'>

        {this.props.isAuth
          ? <div className='app-wrapper'>
              <SideBar />
              <div className='app-wrapper-content'>
                <Switch>
                  <Route exact path={'/'} render={() => <Redirect to={`/profile/${this.props.authId}`} />} />
                  <Route exact path='/profile' render={() => <Redirect to={`/profile/${this.props.authId}`} />} />
                  <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                  <Route path='/news' component={News} />
                  <Route exact path='/messages/:userId?' render={withSuspense(MessagesContainer)} />
                  <Route path='/friends' render={() => <UsersContainer />} />
                  <Route path='/communities' component={Communities} />
                  <Route path='/events' component={Events} />
                  <Route path='/pages' component={Pages} />
                  <Route path='/manage' component={Manage} />
                  <Route path='/login' component={Login} />
                  <Route path='*' render={() => <div> 404 not found </div>} />
                </Switch>
              </div>
            </div>
          :  <Login/>
        }
        
        <FooterContainer />
      </div>
    )
  }
}

const mapStateToPropse = (state) => (
  {
    initialized: state.app.initialized,
    authId: state.auth.id,
    isAuth: state.auth.isAuth
  }
)

const AppContainer = compose(
  withRouter,
  connect(mapStateToPropse, { initializeAppThunk }))(App)

const HightApp = () => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}
export default HightApp
