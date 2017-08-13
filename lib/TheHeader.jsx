'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { TheLink } from 'the-link'
import { TheIcon } from 'the-icon'
import c from 'classnames'
import TheHeaderStyle from './TheHeaderStyle'
import { TheContainer } from 'the-container'
import { htmlAttributesFor } from 'the-component-util'

/**
 * Header of the-components
 */
class TheHeader extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    s.inner = null
    s.handleResize = s.handleResize.bind(s)
    s.state = {
      innerHeight: null
    }
  }

  render () {
    const s = this
    const {props, state} = s
    const {
      className,
      children,
      style,
      asOverlay
    } = props
    const {innerHeight} = state
    return (
      <header {...htmlAttributesFor(props, {except: ['className', 'style']})}
              className={c('the-header', className, {
                'the-header-as-overlay': asOverlay
              })}
              style={{minHeight: innerHeight}}
      >
        <div className='the-header-inner'
             style={style}
             ref={(inner) => { s.inner = inner }}
        >
          <TheContainer>
            {children}
          </TheContainer>
        </div>
      </header>
    )
  }

  componentDidMount () {
    const s = this
    window.addEventListener('resize', s.handleResize)
    s.doLayout()
  }

  componentWillUnmount () {
    const s = this
    window.removeEventListener('resize', s.handleResize)
  }

  handleResize (e) {
    const s = this
    s.doLayout()
  }

  doLayout () {
    const s = this
    let {inner} = s
    let innerHeight = inner && inner.offsetHeight
    s.setState({innerHeight})
  }

  static Logo ({to = '/', children}) {
    return (
      <TheLink to={to}
               className='the-header-logo'>
        {children}
      </TheLink>
    )
  }

  static Tab ({children}) {
    return (
      <ul className='the-header-tab'>
        {children}
      </ul>
    )
  }

  static TabItem ({
                    to,
                    text,
                    icon,
                    activeClassName,
                    activeStyle,
                    children
                  }) {
    return (
      <li className='the-header-tab-item'>
        <TheLink to={to}
                 activeClassName={activeClassName}
                 activeStyle={activeStyle}
        >
          {icon && (<TheIcon className={icon}/>)}
          {text && (<span className='the-header-tab-item-text'/>)}
          {children}
        </TheLink>
      </li>
    )
  }

  static RightArea (props) {
    const {className, children} = props
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           className={c('the-header-right-area', className)}>
        {children}
      </div>
    )
  }
}

TheHeader.Style = TheHeaderStyle

TheHeader.propTypes = {
  /** Style as overlay */
  asOverlay: PropTypes.bool
}

TheHeader.defaultProps = {
  asOverlay: false
}

TheHeader.displayName = 'TheHeader'

export default TheHeader
