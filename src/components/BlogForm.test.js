import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'

test('<BlogForm /> updates parent state and calls onSubmit', () => {
  //const createNote = jest.fn()

  const component = render(
    <BlogForm />
  )

  const inputTitle = component.container.querySelector('#title')
  const inputAuthor = component.container.querySelector('#author')
  const inputUrl = component.container.querySelector('#url')
  const form = component.container.querySelector('form')

  fireEvent.change(inputTitle, { 
    target: { value: 'testing of forms could be easier' } 
  })

  fireEvent.change(inputAuthor, { 
    target: { value: 'testing of forms could be easier' } 
  })

  fireEvent.change(inputUrl, { 
    target: { value: 'testing of forms could be easier' } 
  })


  fireEvent.submit(form)
})