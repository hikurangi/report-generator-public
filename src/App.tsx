import * as React                  from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout                      from './layout'

const App = (): JSX.Element => (
  <Router>
    <Layout />
  </Router>
);

export default App;
