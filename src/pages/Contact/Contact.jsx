import React from 'react'
import { redirect } from 'react-router-dom'
import FormContent from '../../components/FormContent/FormContent'
import './Contact.css'


export const mailAction = async ({ request }) => {
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  try {
    localStorage.setItem('mail', JSON.stringify(formData))
    return redirect('/')
  } catch (err) {
    throw new Error(err.message)
  }
}

const Contact = () => {
  return (
    <div className='contact'>
      <FormContent
      headerTitle={'Napisz do Nas'}
      buttonName={'Wyślij'}
      />
    </div>
  )
}

export default Contact