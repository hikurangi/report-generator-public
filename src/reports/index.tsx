import * as React from 'react'
import { ReportDOMNode, ReportNode, ReportKVPair } from '../types'
import data from '../model/sample-section.json'
import traverse from '../services/traverse'

const subject = {
  name: 'Hermione',
  gender: 'female'
}

// needs a DOM version of the traversal function
const node = traverse({ report: data[0], subject })

const Reports = (): JSX.Element => {
  console.log({node})
  return (
  <React.Fragment>
    <h1>Reports</h1>
      {/* id should be hashed */}
      <div key={node.id}>
        <h3>{node.title}</h3>
        {node.body && <p>{node.body}</p>}
        {/* {node.sections && <Reports></Reports>} */}
      </div>
  </React.Fragment>
)}

export default Reports