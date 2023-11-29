export default (docs, term) => {
    const results = [];
    const getWords = (s) => {
        return s.split(' ').map(x => getTerm(x));
    }

    const exp = /\w+/g;

    const getTerm = (token) => {
        const matches = token.match(exp);
        return matches ? matches[0].toLowerCase() : '';
    }

    const prepTerm = getTerm(term);

    for (const doc of docs) {

        const words = getWords(doc.text);

        for (const word of words) {
            if (word === prepTerm) {
                if (results.indexOf(doc.id) === -1) {
                    results.push(doc.id);
                    break;
                }
            }
        }
    }

    return results;
}
