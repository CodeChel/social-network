
import withAuthRedirect from '../../hoc/withAuthRedirect'
import {sendMessage,  setSearch, getUserForMessages,setUserForMessages, setNewDialog} from '../../redux/messages-reducer'
import Messages from './Messages/Messages.jsx'
import {connect} from 'react-redux'
import { compose } from 'redux'


const mapStateToProps = (state) => {
    return {
        dialogItemsData: state.messages.dialogItemsData,
        dialogsFromSearch: state.messages.dialogsFromSearch,
        isFetching: state.messages.isFetching,
        userForMessage: state.messages.userForMessage
      
     }
}

  const MessagerContainer = compose(
    connect(mapStateToProps,{sendMessage,getUserForMessages,setUserForMessages, setSearch, setNewDialog}),
    withAuthRedirect
)(Messages)


export default MessagerContainer