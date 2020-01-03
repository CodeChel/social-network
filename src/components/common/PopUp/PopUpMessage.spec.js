
import React from 'react'
import { shallow } from 'enzyme'
import  {PopUpMessage}  from './PopUpMessage.jsx'

describe('popUpAvatar', () => {
    const mockClosePopup = jest.fn()
  const props = { 
    user: {
        id: 1,
        name: 1,
        photos:{
            small: '1'
        }
    },
    closePopup : mockClosePopup
  }
  

  const popMessage = shallow(<PopUpMessage {...props}/>)
  it ('popUpAvatar rendered correct props', () => {
    expect(popMessage.find('#popUpuserName').text()).toBe(`${props.user.name}`)
  })
  it ('img have correct src from props', () => {
    expect(popMessage.find('img').prop('src')).toBe(`${props.user.name}`)
  })
  it ('dispatches the `closePopup()` when click on div method it receives from props ', () => {

 
    popMessage.find({role: 'button'}).simulate('click',{
            preventDefault: ()=>{}
        })
        expect(mockClosePopup).toHaveBeenCalledTimes(1)
    })
})