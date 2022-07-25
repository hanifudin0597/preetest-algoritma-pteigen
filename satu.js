
const reverseWord = (company) => {
    let results = ''
    let number = ''
    let pattern = /[0-9]/g;
    for (a = company.length - 1; a >= 0; a--){
        if (company[a].match(pattern)) {
            number += company[a]
        } else {
             results += company[a]
        }
    }
    return results += number
}


console.log(reverseWord('NEGIE1'))