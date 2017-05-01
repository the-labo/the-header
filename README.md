the-header
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/the-labo/the-header
[bd_travis_url]: http://travis-ci.org/the-labo/the-header
[bd_travis_shield_url]: http://img.shields.io/travis/the-labo/the-header.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/the-labo/the-header
[bd_travis_com_shield_url]: https://api.travis-ci.com/the-labo/the-header.svg?token=
[bd_license_url]: https://github.com/the-labo/the-header/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/the-labo/the-header
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/the-labo/the-header.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/the-labo/the-header.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/the-labo/the-header
[bd_gemnasium_shield_url]: https://gemnasium.com/the-labo/the-header.svg
[bd_npm_url]: http://www.npmjs.org/package/the-header
[bd_npm_shield_url]: http://img.shields.io/npm/v/the-header.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Header of the-components

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install the-header --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

import React from 'react'
import TheRouter from 'the-router'
import TheRoute from 'the-route'
import { TheHeader, TheHeaderStyle } from 'the-header'
import { TheButton, TheButtonStyle } from 'the-button'

class ExampleComponent extends React.PureComponent {
  render () {
    const { MockPage } = ExampleComponent
    const { Logo, Tab, TabItem, RightArea } = TheHeader
    return (
      <div>
        <TheRouter.Hash>
          <TheHeaderStyle/>
          <TheButtonStyle/>
          <TheHeader>
            <Logo>Some app</Logo>
            <Tab>
              <TabItem to='/page-a'>PageA</TabItem>
              <TabItem to='/page-b'>PageB</TabItem>
            </Tab>
            <RightArea>
              <TheButton>Login</TheButton>
              <TheButton primary>Sign Up</TheButton>
            </RightArea>
          </TheHeader>
          <div>
            <MockPage path='/page-a'
                      color='#83A'
                      message='This is Page A'
            />
            <MockPage path='/page-b'
                      color='#38A'
                      message='This is Page B'
            />
          </div>
        </TheRouter.Hash>
      </div>
    )
  }

  static MockPage ({ path, color, message }) {
    return (
      <TheRoute path={path}
                render={(props) => (
                  <div style={{ color: color }}>
                    {message}
                  </div>
                )}
      >

      </TheRoute>
    )
  }
}

export default ExampleComponent

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Components.md.hbs" Start -->

<a name="section-doc-guides-03-components-md"></a>

Components
-----------

### TheHeader

Header of the-components

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
### TheHeaderStyle

Style for TheHeader

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `options` | object  | Style options | `{}` |


<!-- Section from "doc/guides/03.Components.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/the-labo/the-header/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [THE Labo][t_h_e_labo_url]

[t_h_e_labo_url]: https://github.com/the-labo

<!-- Links End -->
