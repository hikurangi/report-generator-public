import getPronouns from '../model/pronouns'
import { CompileInputs, ReportNode } from '../types'

const pronounPattern = /\{\{(.*?)\}\}/g

const compile = ({ report, reportee } : CompileInputs) : ReportNode => {
  const pronouns: Map<string, string> = getPronouns(reportee) 

  let body = report.body ?? ""

  // could remove this 'if' block - just run every time.
  if (body.length > 0) {

    body = body.replace(pronounPattern, (_, pronounCandidate, pronounOffset) => {

      // makes the pronouns.get() call below safe
      if(!pronouns.has(pronounCandidate)) {
        throw new Error(`Could not find a matching pattern for: "${pronounCandidate}"`)
      }

      const doesMatchStartASentence = body.substring(pronounOffset - 2, pronounOffset) === '. '
      
      // the use of the cast <string> below is a workaround, given the following quirk of ts' Map.get():
      // https://stackoverflow.com/questions/30019542/es6-map-in-typescript#answer-50826619
      const pronoun = <string>pronouns.get(pronounCandidate)

      return doesMatchStartASentence
        ? `${pronoun.charAt(0).toUpperCase()}${pronoun.slice(1)}`
        : pronoun
    })
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