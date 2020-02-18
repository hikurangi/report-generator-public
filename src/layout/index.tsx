import * as React from 'react'
import Nav        from '../nav'
import Main    from '../Main'
import CSS        from "csstype"

const header: CSS.Properties = {
  margin: "50px auto"
};

const Layout = (): JSX.Element => (
<main className="container">
  <section className="row" style={header}>
    <Nav />
  </section>
  <section className="row">
    <div className="twelve rows">
      <Main />
    </div>
  </section>
</main>
)

export default Layout