import pronouns from '../model/pronouns'
import { CompileInputs, ReportNode } from '../types'

const capitalizeFirstLetter = (string : string) : string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`

const compile = ({ report, reportee } : CompileInputs) : ReportNode => {
  const patterns = pronouns(reportee) 
  const { body } = report
  let formatted

  if (body && body.length > 0) {

    formatted = body.replace(/\{\{(.*?)\}\}/g, (_, captured, offset) => {

      // makes the patterns.get() call below safe
      if(!patterns.has(captured)) {
        throw new Error(`Could not find a matching pattern for: "${captured}"`)
      }

      const doesMatchStartASentence = body.substring(offset - 2, offset) === '. '
      // the use of the cast <string> below is a workaround, given the following quirk of ts' Map.get():
      // https://stackoverflow.com/questions/30019542/es6-map-in-typescript#answer-50826619
      const pronoun = <string>patterns.get(captured)

      return doesMatchStartASentence
        ? capitalizeFirstLetter(pronoun)
        : pronoun
    })
  }

  return {
    // safe to destructure 'cause the return value is typed
    // lollll
    ...report,
    body: formatted
  }
}

export {
  compile
}