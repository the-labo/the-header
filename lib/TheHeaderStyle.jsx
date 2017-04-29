'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'

/** Style for TheHeader */
const TheHeaderStyle = ({ id, className, options }) => (
  <TheStyle { ...{ id } }
            className={ classnames('the-header-style', className) }
            styles={ TheHeaderStyle.data(options) }
  />
)

TheHeaderStyle.displayName = 'TheHeaderStyle'
TheHeaderStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheHeaderStyle.defaultProps = {
  options: {}
}

TheHeaderStyle.data = (options) => {
  const { ThemeValues } = TheStyle
  let {
    overlayBackgroundColor = ThemeValues.overlayBackgroundColor,
    overlayBorderColor = ThemeValues.overlayBorderColor,
    headerHeight = ThemeValues.headerHeight,
    zIndex = 4
  } = options
  return {
    '.the-header': {
      minHeight: headerHeight
    },
    '.the-header-inner': {
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      zIndex,
      minHeight: headerHeight,
      backgroundColor: overlayBackgroundColor,
      borderBottom: `1px solid ${overlayBorderColor}`
    },
    '.the-header-inner .the-container': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    '.the-header-logo': {
      display: 'inline-block',
      color: 'inherit',
      textDecoration: 'none'
    },
    '.the-header-tab': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '0 4px',
      margin: 0,
      listStyle: 'none'
    },
    '.the-header-tab-item': {
      display: 'inline-block',
      padding: '4px 8px'
    }
  }
}

export default TheHeaderStyle
