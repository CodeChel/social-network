
import React from 'react'
import { shallow } from 'enzyme'
import  PopUp  from './popUp.jsx'

describe('popUp', () => {
    const mockClosePopup = jest.fn()
  const props = { 
    Component: 'testComponent',
    closePopup : mockClosePopup
  }
  


  it ('Component rendered', () => {

    const popUp = shallow(<PopUp {...props}/>)
  
    expect(popUp.find('div')).toHaveLength(1)
  })
  it ('dispatches the `closePopup()` when click on div method it receives from props ', () => {

    const popUp = shallow(<PopUp {...props}/>)
    popUp.find('div').simulate('click',{
        preventDefault: ()=>{}
    })
    expect(mockClosePopup).toHaveBeenCalledTimes(1)
  })
})