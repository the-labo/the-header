/**
 * Test for TheHeaderStyle.
 * Runs with mocha.
 */
'use strict'

import TheHeaderStyle from '../lib/TheHeaderStyle'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('the-header-style', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = render(
       <TheHeaderStyle />
    )
    ok(element)
  })
})

/* global describe, before, after, it */
