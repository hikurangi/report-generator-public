interface ReportNode {
  id: string,
  title: string,
  body?: string,
  note?: string,
  sections?: ReportNode[]
}

interface Subject {
  name: string,
  gender: string
}

interface CompileInputs {
  text: string,
  subject: Subject
}

interface TraverseInputs {
  report: ReportNode,
  // could just be accessed globally rather than specifically injected, but this is 'more pure'
  subject: Subject
}

// should be in separate place?
interface ReportDOMNode extends ReportNode {
  key?: string
}

type ReportKVPair = [string, string | ReportNode[]]

export {
  CompileInputs,
  Subject,
  ReportKVPair,
  ReportNode,
  ReportDOMNode,
  TraverseInputs
}