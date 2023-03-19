import React, { useRef, useEffect } from 'react'
import { Form } from 'react-router-dom'
import './FormContent.css'

const FormContent = ({ headerTitle, buttonName }) => {
  const focusRef = useRef()

  useEffect(() => {
    focusRef.current.focus()
  })
  return (
    <div className='note'>
      <h2>{headerTitle}</h2>
      <Form
        className='form'
        method='post'
      >
        <div className='form-input'>
          <label htmlFor='newTitle'>Name</label>
          <input
            type='text'
            name='newName'
            id='newName'
            placeholder='e.g.,Karol '
            required
            ref={focusRef}
           
          />
        </div>
        <div className='form-input'>
          <label htmlFor='newTitle'>Email</label>
          <input
            type='email'
            name='newEmail'
            id='newEmail'
            placeholder='e.g.,karol@wp.pl '
            required
            
          />
        </div>
        <div className='form-input'>
          <label htmlFor='newDescription'>Wiadomość</label>
          <textarea
            name='newDescription'
            id='newDescription'
            placeholder='e.g., Lorem... '
            required
           
          />
        </div>
       
        <div className='form-input'>
          <button
            type='submit'
            className='btn btn-dark'
          >
            {buttonName}
          </button>
        </div>
      </Form>
    </div>
  )
}

export default FormContent