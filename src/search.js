export default (docs, term) => {
    const results = [];
    const getWords = (s) => {
        return s.split(' ').map(x => x.toLowerCase());
    }

    for (const doc of docs) {

        const words = getWords(doc.text);

        for (const word of words) {
            if (word === term) {
                if (results.indexOf(doc.id) === -1) {
                    results.push(doc.id);
                    break;
                }
            }
        }
    }

    return results;
}
