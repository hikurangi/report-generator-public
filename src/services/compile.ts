import pronouns from '../model/pronouns'

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

const compile = ({ report, reportee } : CompileInputs) : ReportNode => {

  const matches: Map<string, string> = new Map([
    ['{{REPORTEE_NAME}}', reportee.name],
    ['{{REPORTEE_NAME_POSSESSIVE}}', reportee.name.slice(-1) == 's' ? `${reportee.name}'` : `${reportee.name}'s`],
    ...pronouns(reportee.gender)
  ])

  let { body } = report

  if (body && body.length > 0) {
    // how does this deal with double spaces, tabs?
    // For now, we trust this text -> assume that we have kept it clean using validation, trimming whitespace etc
    body = body
      .split(' ')
      // punctuation ie: full stop at end is a problem.
      .map(word => {
        const testWord : string = word.replace(/[^\w\s_\-\{\}]/, '')
        // is word at beginning of sentence?
        // - at end of sentence?
        // - pre/pro-ceded by colon or comma?

        return matches.has(testWord)
          ? matches.get(testWord)
          : word
      })
      .join(' ')

  }

  return {
    // safe to destructure 'cause the return value is typed
    // lollll
    ...report,
    body
  }
}

export {
  compile
}