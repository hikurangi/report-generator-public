interface ReportNode {
  id: string,
  title: string,
  body?: string,
  note?: string,
  sections?: ReportNode[]
}

interface Reportee {
  name: string,
  gender: string
}

interface CompileInputs {
  report: ReportNode,
  reportee: Reportee
}

// type Errorable<T> = T | Error;
// type Nullable<T> = T | null;

export {
  CompileInputs,
  Reportee,
  ReportNode
}