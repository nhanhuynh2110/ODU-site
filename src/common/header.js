import React from 'react'

import Info from './info'
import HeaderLogo from './logo'
import HeaderMenu from './menu'

import HeaderTop from './headerTop'
import HeaderMiddle from './headerMiddle'
import HeaderBottom from './headerBottom'

class Headers extends React.PureComponent {
  render () {
    return (
      <>
        <header id="header">
          <HeaderTop />
          <HeaderMiddle />
          {/* <HeaderBottom /> */}
        </header>
        {/* <Info />
        <HeaderLogo />
        <HeaderMenu categories={this.props.categories}/> */}
      </>
    )
  }
}

export default Headers
