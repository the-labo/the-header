'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

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
    dominantColor = ThemeValues.dominantColor,
    contentWidth = ThemeValues.contentWidth,
    tabInactiveColor = ThemeValues.tabInactiveColor,
    zIndex = 4
  } = options
  return asStyleData('.the-header', {
    '': {
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
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    },
    '.the-header-logo': {
      display: 'inline-block',
      color: 'inherit',
      textDecoration: 'none',
      height: headerHeight,
      padding: '0 8px',
      lineHeight: `${headerHeight}px`,
      marginRight: '16px'
    },
    '.the-header-tab': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '0 8px',
      margin: '0 -8px',
      listStyle: 'none',
      boxSizing: 'border-box',
      minWidth: contentWidth
    },
    '.the-header-tab-item': {
      display: 'inline-block',
      margin: 0,
      padding: 0
    },
    '.the-header-tab-item .the-link': {
      display: 'inline-block',
      color: tabInactiveColor,
      padding: '0 8px',
      textDecoration: 'none',
      borderBottom: '2px solid transparent',
      fontSize: 'smaller',
      height: headerHeight,
      lineHeight: `${headerHeight}px`,
      boxSizing: 'border-box',
      maxWidth: '100%'
    },
    '.the-header-tab-item .the-link-active': {
      borderBottomColor: dominantColor,
      color: dominantColor
    },
    '.the-button': {
      fontSize: 'smaller',
      padding: '0.25em 1em'
    },
    '.the-container': {
      position: 'relative'
    },
    '.the-header-right-area': {
      position: 'absolute',
      right: 0,
      height: headerHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
}

export default TheHeaderStyle
