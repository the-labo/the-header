'use strict'

import React from 'react'
import TheHeader from 'the-header'

const TheHeaderStyles = TheHeader.styles({})

class ExampleComponent extends React.PureComponent {
  render () {
    return (
      <TheHeader id='my-component'
                 styles={ TheHeaderStyles }
      />
    )
  }
}

export default ExampleComponent
