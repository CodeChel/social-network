
import React from 'react'
import { shallow } from 'enzyme'
import  Footer  from '../Footer.jsx'


describe('EmojiPickerForm', () => {

  const props = { 
    isAuth: false
  }
  

  const footer = shallow(<Footer {...props}/>)
  it ('Footer rendered correctly when props isAuth is false', () => {

    expect(footer.text()).toBe('you are not authorized')
  
   
  })
  it ('Footer rendered correctly when props isAuth is true', () => {
    const propsBefore = { 
        isAuth: true
      }
      const footer = shallow(<Footer {...propsBefore}/>)
    expect(footer.text()).not.toBe('you are not authorized')
  
   
  })
  
})