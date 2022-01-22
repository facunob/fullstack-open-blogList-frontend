import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    title: 'This is a title',
    author: 'this is an author'
  }

  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'This is a title this is an author'
  )
});

test('clicking the button calls event handler once', () => {
  const blog = {
    title: 'This is a title',
    author: 'this is an author',
    likes: 1,
    url: "this is an url"
  }

  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} />
  )

  const button = component.getByText('Show details')
  fireEvent.click(button)

  const divComponent = component.container.querySelector("#details");

  expect(divComponent.container).toHaveTextContent(
    '1 this is an url'
  )
})