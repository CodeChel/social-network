
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
  it ('change local state the when click on div method it receives from props ', () => {

    emojiPickerForm.find({role: 'button'}).simulate('click')
    expect(emojiPickerForm.find('Picker')).to.have.lengthOf(1)
  })
})