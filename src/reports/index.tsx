import * as React from 'react'
import { ReportNode } from '../types'
// TODO: consume properly
import data from '../model/sample-section.json'
import traverse from '../services/traverse'

// Temporary - should be in a data-fetching abstraction since it will inevitably take place over the wire
const processedSampleReport: ReportNode = traverse({
  report: data[0],
  subject: { name: 'Homer', gender: 'male' }
})

const Reports = ({ reportNode = processedSampleReport }): JSX.Element => (
  <>
    <div>
      <h3>{reportNode.title}</h3>
      <p><em>{reportNode.body}</em></p>
      {reportNode.sections?.map(section => <Reports reportNode={section}/>)}
    </div>
  </>
)

export default Reports