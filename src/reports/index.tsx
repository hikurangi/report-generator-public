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

const Reports = (): JSX.Element => (
  <>
    <h1>Reports</h1>
    <div>
      <h2>Report 1</h2>
    </div>
  </>
)

export default Reports