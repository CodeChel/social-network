
import React from 'react'
import { shallow } from 'enzyme'
import  EmojiPickerForm  from './EmojiPicker.jsx'


describe('EmojiPickerForm', () => {

  const props = { 
    formName: 'test',
    fieldName : 'test1',
    styles: {
      buttomEmoji: 1
    }
  }
  

  const emojiPickerForm = shallow(<EmojiPickerForm {...props}/>)
  it ('EmojiPickerForm rendered correctly', () => {

    
  
    expect(emojiPickerForm.find('div')).toHaveLength(1)
    expect(emojiPickerForm.find('span')).toHaveLength(1)
  })
  it ('hide/show picker-component on mouse events ', () => {

    emojiPickerForm.find('div').simulate('click')
    expect(emojiPickerForm.find('Picker')).toHaveLength(1)
    emojiPickerForm.find('div').simulate('mouseleave')
    expect(emojiPickerForm.find('Picker')).toHaveLength(0)
  })
})