import {test, expect, describe} from '@jest/globals'
import search from "../src/search.js";

describe('search', () => {
    const docs = [
        { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" },
        { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." },
        { id: 'doc3', text: "I'm your shooter." }
    ]

    test('search in three docs', () => {
        expect(search(docs, 'shoot')).toEqual(['doc1', 'doc2']);
    })

    test('search in empty docs', () => {
        expect(search([], 'fdsfasdfsadf')).toEqual([]);
    })

    test('search when there are punctuation marks', () => {
        expect(search([docs[0]], 'pint!')).toEqual(['doc1'])
        expect(search([docs[0]], 'pint')).toEqual(['doc1'])
    })
})