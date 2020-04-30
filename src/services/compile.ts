interface ReportNode {
  id: string,
  title: string,
  body?: string,
  note?: string,
  sections?: ReportNode[]
}

interface Reportee {
  name: string
}

interface CompileInputs {
  report: ReportNode
}

interface Pronouns {
  
}

const compile = ({ report: ReportNode } : CompileInputs) : ReportNode => {
  return {
    id: 'sdfsdf',
    title: 'sdfsdf'
  }
}