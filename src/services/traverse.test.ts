import traverse from './traverse'
import { crashReporter } from 'electron'

test('Traverses and interpolates a tree correctly', () => {
  const report = {
    id: '18c14207-7249-46c7-828e-73def8c1cfc6',
    title: 'Good',
    body: 'When reading a passage of text, {{REPORTEE_NAME}} also read accurately and at a good rate.'
  }

  const reportee = {
    name: 'Harry',
    gender: 'male'
  }

  const actual = traverse(report)
  const expected = {
    id: '18c14207-7249-46c7-828e-73def8c1cfc6',
    title: 'Good',
    body: 'When reading a passage of text, Harry also read accurately and at a good rate.'
  }

  expect(actual).toEqual(expected)
})