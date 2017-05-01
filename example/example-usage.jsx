'use strict'

import React from 'react'
import TheRouter from 'the-router'
import TheRoute from 'the-route'
import { TheHeader, TheHeaderStyle } from 'the-header'
import { TheButton, TheButtonStyle } from 'the-button'

class ExampleComponent extends React.PureComponent {
  render () {
    const { MockPage } = ExampleComponent
    const { Logo, Tab, TabItem } = TheHeader
    return (
      <div>
        <TheRouter.Hash>
          <TheHeaderStyle/>
          <TheButtonStyle/>
          <TheHeader>
            <Logo>Some app</Logo>
            <Tab>
              <TabItem to='/page-a'>PageA</TabItem>
              <TabItem to='/page-b'>PageB</TabItem>
            </Tab>
            <div>
              <TheButton>Login</TheButton>
              <TheButton primary>Sign Up</TheButton>
            </div>
          </TheHeader>
          <div>
            <MockPage path='/page-a'
                      color='#83A'
                      message='This is Page A'
            />
            <MockPage path='/page-b'
                      color='#38A'
                      message='This is Page B'
            />
          </div>
        </TheRouter.Hash>
      </div>
    )
  }

  static MockPage ({ path, color, message }) {
    return (
      <TheRoute path={path}
                render={(props) => (
                  <div style={{ color: color }}>
                    {message}
                  </div>
                )}
      >

      </TheRoute>
    )
  }
}

export default ExampleComponent
