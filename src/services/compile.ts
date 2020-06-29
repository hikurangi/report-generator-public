import getPronouns from '../model/pronouns'
import { CompileInputs, ReportNode } from '../types'

const pronounPattern = /\{\{(.*?)\}\}/g

const compile = ({ text, reportee } : CompileInputs) : string => {
  const pronouns: Map<string, string> = getPronouns(reportee) 
  
  let outputText = ''
  
  if (text?.length > 0) {
    outputText = text.replace(pronounPattern, (_, pronounCandidate, pronounOffset) => {

      // makes the pronouns.get() call below safe
      if(!pronouns.has(pronounCandidate)) {
        throw new Error(`Could not find a matching pattern for: "${pronounCandidate}"`)
      }

      const doesMatchStartASentence = text.substring(pronounOffset - 2, pronounOffset) === '. '
      
      // the use of the cast <string> below is a workaround, given the following quirk of ts' Map.get():
      // https://stackoverflow.com/questions/30019542/es6-map-in-typescript#answer-50826619
      const pronoun = <string>pronouns.get(pronounCandidate)

      return doesMatchStartASentence
        ? `${pronoun.charAt(0).toUpperCase()}${pronoun.slice(1)}`
        : pronoun
    })
  }

  return outputText
}

export default compile