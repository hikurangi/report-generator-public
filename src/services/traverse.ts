import { TraverseInputs, ReportKVPair, ReportNode } from '../types'
import compile from './compile'

const traverse = ({ report, subject }: TraverseInputs): ReportNode => {

  return Object.entries(report).reduce((currentNode: ReportNode, [key, value]: ReportKVPair) => {

      let updateValue = value

      if (key === 'body') {
        updateValue = compile({ subject, text: <string>value })

      } else if (key === 'sections') {
        updateValue = report?.sections?.map(section => traverse({
          report: section,
          subject
        })) || []

      }

      return Object.assign(currentNode, { [key]: updateValue })
    }, {
      id: '',
      title: ''
    })

}

export default traverse

