const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const parentArray = [];
    for (let letter of letters) {
        for (let i = 0; i < letter.length; i++) {
            if (parentArray.length < letters[0].length) {
                let newArray = []
                newArray.push(letter[i]);
                parentArray.push(newArray);
            } else {
                parentArray[i].push(letter[i]);
            }
        }
    }
    //console.log(parentArray);
    const verticalJoin = parentArray.map(ls => ls.join(''))
    console.log(verticalJoin);
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false
}


module.exports = wordSearch