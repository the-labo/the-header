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
  const { theme } = TheStyle
  let {
    overlayBackground = theme.OVERLAY_BACKGROUND,
    zIndex = 4
  } = options
  return {
    '.the-header-inner': {
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      zIndex,
      overlayBackground,
      display: 'flex'
    },
    '.the-header-logo': {},
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
