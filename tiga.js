INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']

let countQueryonInput = 0;
let resultCount = []
let resultWord = `OUTPUT = karena `


for (a = 0; a <= QUERY.length - 1; a++){
    for (b = 0; b <= INPUT.length - 1; b++){
        if (QUERY[a] === INPUT[b]) {
            countQueryonInput += 1;
        } else {
            countQueryonInput += 0
        }
    }
    resultCount.push(countQueryonInput)
    countQueryonInput = 0
    resultWord += ` kata '${QUERY[a]}' terdapat ${resultCount[a]} pada Input, `
}

console.log(resultWord)