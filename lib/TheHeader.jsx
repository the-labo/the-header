'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'

/**
 * Header of the-components
 */
class TheHeader extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      id,
      className,
      styles,
      children
    } = props
    return (
      <header className={ classnames('the-header', className) }
              style={ styles.root }
              { ...{ id }}
      >
        <div className='header-inner'
             style={ styles.inner }
        >
          { children }
        </div>
      </header>
    )
  }

  /**
   * Define style
   * @param [options={}] options - Optional settings
   * @returns {Object} Style object
   */
  static styles (options = {}) {
    const { theme } = TheStyle
    let {
      backgroundColor = theme.OVERLAY_BACKGROUND,
      zIndex = 4
    } = options
    return {
      root: {},
      inner: {
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        zIndex,
        backgroundColor
      }
    }
  }
}

TheHeader.propTypes = {
  /** CSS class name */
  className: PropTypes.string,
  /** Style objects */
  styles: PropTypes.object,
  /** DOM Id */
  id: PropTypes.string
}

TheHeader.defaultProps = {
  className: null,
  styles: TheHeader.styles({}),
  id: null
}

TheHeader.displayName = 'TheHeader'

export default TheHeader
