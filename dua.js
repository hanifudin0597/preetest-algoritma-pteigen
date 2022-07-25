const Longest = (sentence) => {
    const arraySentence = sentence.split(' ')
    let word = ''

    for (a = 0; a <= arraySentence.length - 1; a++){
        for (b = 0; b < arraySentence.length - 1; b++){
            if (arraySentence[a].length < arraySentence[b].length) {
                word = arraySentence[b]
            }
        }
    }

    const countLengthWord = word.length

    console.log(`${word} : ${countLengthWord} character`)
}

Longest('Saya sangat senang mengerjakan soal algoritma')