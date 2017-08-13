'use strict'

import React from 'react'
import TheRouter from 'the-router'
import TheRoute from 'the-route'
import { TheHeader, TheHeaderStyle } from 'the-header'
import { TheButton, TheButtonStyle } from 'the-button'

class ExampleComponent extends React.PureComponent {
  render () {
    const {MockPage} = ExampleComponent
    const {Logo, Tab, TabItem, RightArea} = TheHeader
    return (
      <div>
        <TheRouter.Hash>
          <TheHeaderStyle/>
          <TheButtonStyle/>
          <TheHeader notices={{
            'you needs to verify your email': {
              'send again': () => console.log('send it!')
            }
          }}>
            <Logo>Some app</Logo>
            <Tab>
              <TabItem to='/page-a'>PageA</TabItem>
              <TabItem to='/page-b'>PageB</TabItem>
            </Tab>
            <RightArea>
              <TheButton>Login</TheButton>
              <TheButton primary>Sign Up</TheButton>
            </RightArea>
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

            <hr/>

            <TheHeader asOverlay
                       style={{top: 190}}
            >
              <Logo>Some app</Logo>
              <Tab>
                <TabItem to='/page-a'>PageA</TabItem>
                <TabItem to='/page-b'>PageB</TabItem>
              </Tab>
              <RightArea>
                <TheButton>Login</TheButton>
                <TheButton primary>Sign Up</TheButton>
              </RightArea>
            </TheHeader>
          </div>
        </TheRouter.Hash>
      </div>
    )
  }

  static MockPage ({path, color, message}) {
    return (
      <TheRoute path={path}
                render={(props) => (
                  <div style={{color: color}}>
                    {message}
                  </div>
                )}
      >

      </TheRoute>
    )
  }
}

export default ExampleComponent
