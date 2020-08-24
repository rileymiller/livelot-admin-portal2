import React from 'react'

import { render } from '@testing-library/react'
import { Basic } from './App.stories'
describe(`<App />`, () => {
  it(`renders the App`, () => {
    // Arrange
    const { getByText } = render(<Basic />)

    // Act
    const appText = getByText(/^LiveLot Admin Portal$/i)

    // Assert
    expect(appText).toBeInTheDocument()
  })
})