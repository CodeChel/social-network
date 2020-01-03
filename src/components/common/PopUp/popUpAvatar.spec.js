
import React from 'react'
import { shallow } from 'enzyme'
import  PopUpAvatar  from './popupAvatar.jsx'

describe('popUpAvatar', () => {
    const mockClosePopup = jest.fn()
  const props = { 
    avatar: 'avatar',
    closePopup : mockClosePopup
  }
  

  const popAvatar = shallow(<PopUpAvatar {...props}/>)
  it ('popUpAvatar rendered correctly', () => {

    
  
    expect(popAvatar.find('div')).toHaveLength(2)
    expect(popAvatar.find('img')).toHaveLength(1)
    expect(popAvatar.find('img').prop('src')).toBe(props.avatar)
  })
  it ('dispatches the `closePopup()` when click on div method it receives from props ', () => {

 
    popAvatar.find({role: 'button'}).simulate('click',{
        preventDefault: ()=>{}
    })
    expect(mockClosePopup).toHaveBeenCalledTimes(1)
  })
})