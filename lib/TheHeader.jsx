'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { TheLink } from 'the-link'
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

  static Logo ({ children }) {
    return (<div className='the-header-logo'>{ children }</div>)
  }

  static Tab ({ children }) {
    return (
      <ul className='the-header-tab'>
        { children }
      </ul>
    )
  }

  static TabItem ({ to, activeClassName, activeStyle, children }) {
    return (
      <li className='the-header-tab-item'>
        <TheLink to={ to }
                 activeClassName={ classnames('the-header-tab-item-active', activeClassName) }
                 activeStyle={ activeStyle }
        >{ children }</TheLink>
      </li>
    )
  }
}

TheHeader.Style = TheHeaderStyle

TheHeader.propTypes = {}

TheHeader.defaultProps = {}

TheHeader.displayName = 'TheHeader'

export default TheHeader
