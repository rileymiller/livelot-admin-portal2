import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'
import { App } from './App'
describe(`<App />`, () => {
  it(`renders the App`, () => {
    // Arrange
    const { getByText } = render(<App />)

    // Act
    const appText = getByText(/^LiveLot Admin Portal$/i)

    // Assert
    expect(appText).toBeInTheDocument()
  })
})