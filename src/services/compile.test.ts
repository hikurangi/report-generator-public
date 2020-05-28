import { compile } from './compile'

test('Interpolates a name correctly', () => {
  const report = {
    id: '18c14207-7249-46c7-828e-73def8c1cfc6',
    title: 'Good',
    body: 'When reading a passage of text, {{REPORTEE_NAME}} also read accurately and at a good rate.'
  }

  const reportee = {
    name: 'Harry',
    gender: 'male'
  }

  const actual = compile({ report, reportee })
  const expected = {
    id: '18c14207-7249-46c7-828e-73def8c1cfc6',
    title: 'Good',
    body: 'When reading a passage of text, Harry also read accurately and at a good rate.'
  }

  expect(actual).toEqual(expected)
})

test('Interpolates possessive names correctly', () => {
  const report = {
    id: '18c14207-7249-46c7-828e-73def8c1cfc6',
    title: 'Bad following good word reading',
    body: 'Next, {{REPORTEE_NAME_POSSESSIVE}} fluency reading a piece of text was assessed.'
  }

  const reportee = {
    name: 'Harry',
    gender: 'male'
  }

  const actual = compile({ report, reportee })
  const expected = {
    id: '18c14207-7249-46c7-828e-73def8c1cfc6',
    title: 'Bad following good word reading',
    body: 'Next, Harry\'s fluency reading a piece of text was assessed.'
  }

  expect(actual).toEqual(expected)
})

test('Interpolates possessive names ending with \'s\' correctly', () => {
  const report = {
    id: '18c14207-7249-46c7-828e-73def8c1cfc6',
    title: 'Bad following good word reading',
    body: 'Next, {{REPORTEE_NAME_POSSESSIVE}} fluency reading a piece of text was assessed.'
  }

  const reportee = {
    name: 'Mr. Tumnus',
    gender: 'male'
  }

  const actual = compile({ report, reportee })
  const expected = {
    id: '18c14207-7249-46c7-828e-73def8c1cfc6',
    title: 'Bad following good word reading',
    body: 'Next, Mr. Tumnus\' fluency reading a piece of text was assessed.'
  }

  expect(actual).toEqual(expected)
})

test('Interpolates a variety of pronouns correctly', () => {
  const report = {
    id: '18c14207-7249-46c7-828e-73def8c1cfc6',
    title: 'Bad following good word reading',
    body: 'When reading individual words (Basic Reading Skills SS=XX/XXth percentile), {{REPORTEE_NAME}} knew a number of sight-words, and once {{THIRD_SINGULAR_SUBJECT}} reached lower-frequency words, {{THIRD_SINGULAR_SUBJECT}} was able to sound them out, letter by letter or using familiar letter combinations (e.g. knowing that ‘tion’ is read ‘shon’). This pattern was replicated in the Pseudoword Decoding subtest. Even though {{THIRD_SINGULAR_SUBJECT}} had to rely more heavily on {{THIRD_SINGULAR_DEPENDENT-POSSESSIVE}} decoding skills, {{REPORTEE_NAME}} continued to manage well. {{THIRD_SINGULAR_SUBJECT}} also read at a good speed, suggesting that the reading process is becoming somewhat automatic for {{THIRD_SINGULAR_OBJECT}}.'
  }

  const reportee = {
    name: 'Hermione',
    gender: 'female'
  }

  const actual = compile({ report, reportee })
  const expected = {
    id: '18c14207-7249-46c7-828e-73def8c1cfc6',
    title: 'Bad following good word reading',
    body: 'When reading individual words (Basic Reading Skills SS=XX/XXth percentile), Hermione knew a number of sight-words, and once she reached lower-frequency words, she was able to sound them out, letter by letter or using familiar letter combinations (e.g. knowing that ‘tion’ is read ‘shon’). This pattern was replicated in the Pseudoword Decoding subtest. Even though she had to rely more heavily on her decoding skills, Hermione continued to manage well. She also read at a good speed, suggesting that the reading process is becoming somewhat automatic for her.'
  }

  expect(actual).toEqual(expected)
})