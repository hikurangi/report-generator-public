import * as React        from 'react'
import { Switch, Route } from 'react-router-dom'

import Reports           from './reports'

const Main = (): JSX.Element => (
  <Switch>
    <Route exact path="/">
      <h1>HOME</h1>
    </Route>
    <Route path="/reports">
      <Reports />
    </Route>
    <Route path="*">
      <h1>Not found!</h1>
    </Route>
  </Switch>
)

export default Main