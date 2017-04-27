'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheHeaderStyle from './TheHeaderStyle'
import { htmlAttributesFor } from 'the-component-util'

/**
 * Header of the-components
 */
class TheHeader extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      className,
      children
    } = props
    return (
      <header { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
              className={ classnames('the-header', className) }
      >
        <div className='the-header-inner'
        >
          { children }
        </div>
      </header>
    )
  }
}

TheHeader.Style = TheHeaderStyle

TheHeader.propTypes = {}

TheHeader.defaultProps = {}

TheHeader.displayName = 'TheHeader'

export default TheHeader
