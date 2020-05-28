const pronouns = (gender: string) : Array<Array<string, string>> => {
  const list = [
    ['{{FIRST_SINGULAR_SUBJECT}}', 'I'],
    ['{{FIRST_SINGULAR_OBJECT}}', 'me'],
    ['{{FIRST_SINGULAR_DEPENDENT-POSSESSIVE}}', 'my'],
    ['{{FIRST_SINGULAR_INDEPENDENT-POSSESSIVE}}', 'mine'],
    ['{{FIRST_SINGULAR_REFLEXIVE}}', 'myself'],
    ['{{FIRST_PLURAL_SUBJECT}}', 'we'],
    ['{{FIRST_PLURAL_OBJECT}}', 'us'],
    ['{{FIRST_PLURAL_DEPENDENT-POSSESSIVE}}', 'our'],
    ['{{FIRST_PLURAL_INDEPENDENT-POSSESSIVE}}', 'ours'],
    ['{{FIRST_PLURAL_REFLEXIVE}}', 'ourselves'],
    ['{{SECOND_SINGULAR_SUBJECT}}', 'you'],
    ['{{SECOND_SINGULAR_OBJECT}}', 'you'],
    ['{{SECOND_SINGULAR_DEPENDENT-POSSESSIVE}}', 'your'],
    ['{{SECOND_SINGULAR_INDEPENDENT-POSSESSIVE}}', 'yours'],
    ['{{SECOND_SINGULAR_REFLEXIVE}}', 'yourself'],
    ['{{SECOND_PLURAL_SUBJECT}}', 'you'],
    ['{{SECOND_PLURAL_OBJECT}}', 'you'],
    ['{{SECOND_PLURAL_DEPENDENT-POSSESSIVE}}', 'your'],
    ['{{SECOND_PLURAL_INDEPENDENT-POSSESSIVE}}', 'yours'],
    ['{{SECOND_PLURAL_REFLEXIVE}}', 'yourselves'],
    ['{{THIRD_PLURAL_SUBJECT}}', 'they'],
    ['{{THIRD_PLURAL_OBJECT}}', 'them'],
    ['{{THIRD_PLURAL_DEPENDENT-POSSESSIVE}}', 'their'],
    ['{{THIRD_PLURAL_INDEPENDENT-POSSESSIVE}}', 'theirs'],
    ['{{THIRD_PLURAL_REFLEXIVE}}', 'themselves']
  ]

  if (gender === 'female') {
    list.push(
      ['{{THIRD_SINGULAR_SUBJECT}}', 'she'],
      ['{{THIRD_SINGULAR_OBJECT}}', 'her'],
      ['{{THIRD_SINGULAR_DEPENDENT-POSSESSIVE}}', 'her'],
      ['{{THIRD_SINGULAR_INDEPENDENT-POSSESSIVE}}', 'hers'],
      ['{{THIRD_SINGULAR_REFLEXIVE}}', 'herself']
    )
  } else if (gender === 'male') {
    list.push(
      ['{{THIRD_SINGULAR_SUBJECT}}', 'he'],
      ['{{THIRD_SINGULAR_OBJECT}}', 'him'],
      ['{{THIRD_SINGULAR_DEPENDENT-POSSESSIVE}}', 'his'],
      ['{{THIRD_SINGULAR_INDEPENDENT-POSSESSIVE}}', 'his'],
      ['{{THIRD_SINGULAR_REFLEXIVE}}', 'himself']
    )
  } else {
    // very reductive, must fix!
    list.push(
      ['{{THIRD_SINGULAR_SUBJECT}}', 'they'],
      ['{{THIRD_SINGULAR_OBJECT}}', 'them'],
      ['{{THIRD_SINGULAR_DEPENDENT-POSSESSIVE}}', 'their'],
      ['{{THIRD_SINGULAR_INDEPENDENT-POSSESSIVE}}', 'theirs'],
      ['{{THIRD_SINGULAR_REFLEXIVE}}', 'themself']
    )
  }

  return list
}

export default pronouns