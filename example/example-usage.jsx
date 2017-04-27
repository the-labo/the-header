'use strict'

import React from 'react'
import { TheHeader, TheHeaderStyle } from 'the-header'

class ExampleComponent extends React.PureComponent {
  render () {
    return (
      <div>
        <TheHeaderStyle/>
        <TheHeader id='my-component'
        />
      </div>
    )
  }
}

export default ExampleComponent
