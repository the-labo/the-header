/**
 * Test for TheHeader.
 * Runs with mocha.
 */
'use strict'

import TheHeader from '../lib/TheHeader'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('the-header', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = render(
       <TheHeader />
    )
    ok(element)
  })
})

/* global describe, before, after, it */
