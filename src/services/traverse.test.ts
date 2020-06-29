import traverse from './traverse'

test('Traverses and interpolates a tree correctly', () => {

  const report = {
    "id": "a0f2d065-6c1a-4bc3-81f2-3854c8dfb28d",
    "title": "All Good",
    "body": "Across all these measures, {{SUBJECT_NAME}} scored in the average range or above. The foundation skills for reading appear established, and {{THIRD_SINGULAR_SUBJECT}} is able to apply those skills to read familiar words, and words {{THIRD_SINGULAR_SUBJECT}} hasn’t seen before, such as those in the pseudo-word (non-word) reading subtest.",
    "sections": [
      {
        "id": "5f3b5e42-09c0-4d46-a4f4-1a238e68f005",
        "title": "Basic Reading",
        "sections": [
          {
            "id": "8c89bcb0-a937-41ee-973a-ee60ecbe60ae",
            "title": "Good",
            "body": "When reading individual words (Basic Reading Skills SS=XX/XXth percentile), {{SUBJECT_NAME}} knew a good number of sight-words, and once {{THIRD_SINGULAR_SUBJECT}} reached lower-frequency words, {{THIRD_SINGULAR_SUBJECT}} was able to sound them out with ease. This pattern was replicated in the Pseudoword Decoding subtest. Even though {{THIRD_SINGULAR_SUBJECT}} had to rely more heavily on {{THIRD_SINGULAR_DEPENDENT-POSSESSIVE}} decoding skills, {{SUBJECT_NAME}} continued to manage well. {{THIRD_SINGULAR_SUBJECT}} also read at a good speed, suggesting that the reading process is relatively automatic for {{THIRD_SINGULAR_OBJECT}}."
          },
          {
            "id": "55eb1369-8df0-494b-a7ba-5e069e3bb2e5",
            "title": "Generally good",
            "body": "When reading individual words (Basic Reading Skills SS=XX/XXth percentile), {{SUBJECT_NAME}} knew a number of sight-words, and once {{THIRD_SINGULAR_SUBJECT}} reached lower-frequency words, {{THIRD_SINGULAR_SUBJECT}} was able to sound them out, letter by letter or using familiar letter combinations (e.g. knowing that ‘tion’ is read ‘shon’). This pattern was replicated in the Pseudoword Decoding subtest. Even though {{THIRD_SINGULAR_SUBJECT}} had to rely more heavily on {{THIRD_SINGULAR_DEPENDENT-POSSESSIVE}} decoding skills, {{SUBJECT_NAME}} continued to manage well. {{THIRD_SINGULAR_SUBJECT}} also read at a good speed, suggesting that the reading process is becoming somewhat automatic for {{THIRD_SINGULAR_OBJECT}}."
          }
        ]
      },
      {
        "id": "ce3ba7bd-268a-499e-b878-d90293bfc3cb",
        "title": "Oral Reading Fluency",
        "sections": [
          {
            "id": "800949e1-a9a0-4e2e-a161-1708dd76a4ee",
            "title": "Good",
            "body": "When reading a passage of text, {{SUBJECT_NAME}} also read accurately and at a good rate. {{THIRD_SINGULAR_SUBJECT}} used good intonation as {{THIRD_SINGULAR_SUBJECT}} read, and used the punctuation in the text to guide {{THIRD_SINGULAR_DEPENDENT-POSSESSIVE}} pace and expression."
          },
          {
            "id": "95f85ef1-034b-4e32-a24a-a3e0fa8e55ce",
            "title": "Generally good",
            "body": "Generally good body text - missing!"
          }
        ]
      }
    ]
  }

  const subject = {
    name: 'Harry',
    gender: 'male'
  }

  const actual = traverse({ report, subject })
  const expected = {
    "id": "a0f2d065-6c1a-4bc3-81f2-3854c8dfb28d",
    "title": "All Good",
    "body": "Across all these measures, Harry scored in the average range or above. The foundation skills for reading appear established, and he is able to apply those skills to read familiar words, and words he hasn’t seen before, such as those in the pseudo-word (non-word) reading subtest.",
    "sections": [
      {
        "id": "5f3b5e42-09c0-4d46-a4f4-1a238e68f005",
        "title": "Basic Reading",
        "sections": [
          {
            "id": "8c89bcb0-a937-41ee-973a-ee60ecbe60ae",
            "title": "Good",
            "body": "When reading individual words (Basic Reading Skills SS=XX/XXth percentile), Harry knew a good number of sight-words, and once he reached lower-frequency words, he was able to sound them out with ease. This pattern was replicated in the Pseudoword Decoding subtest. Even though he had to rely more heavily on his decoding skills, Harry continued to manage well. He also read at a good speed, suggesting that the reading process is relatively automatic for him."
          },
          {
            "id": "55eb1369-8df0-494b-a7ba-5e069e3bb2e5",
            "title": "Generally good",
            "body": "When reading individual words (Basic Reading Skills SS=XX/XXth percentile), Harry knew a number of sight-words, and once he reached lower-frequency words, he was able to sound them out, letter by letter or using familiar letter combinations (e.g. knowing that ‘tion’ is read ‘shon’). This pattern was replicated in the Pseudoword Decoding subtest. Even though he had to rely more heavily on his decoding skills, Harry continued to manage well. He also read at a good speed, suggesting that the reading process is becoming somewhat automatic for him."
          }
        ]
      },
      {
        "id": "ce3ba7bd-268a-499e-b878-d90293bfc3cb",
        "title": "Oral Reading Fluency",
        "sections": [
          {
            "id": "800949e1-a9a0-4e2e-a161-1708dd76a4ee",
            "title": "Good",
            "body": "When reading a passage of text, Harry also read accurately and at a good rate. He used good intonation as he read, and used the punctuation in the text to guide his pace and expression."
          },
          {
            "id": "95f85ef1-034b-4e32-a24a-a3e0fa8e55ce",
            "title": "Generally good",
            "body": "Generally good body text - missing!"
          }
        ]
      }
    ]
  }

  expect(actual).toEqual(expected)
})