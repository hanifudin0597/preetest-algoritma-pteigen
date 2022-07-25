const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

let diagonal1 = 0
let diagonal2 = 0


for (a = 0; a <= matrix.length - 1; a ++){
    diagonal1 += matrix[a][a]
    diagonal2 += matrix[a][(matrix.length-1)-[a]]
}

const result = `maka hasilnya adalah ${diagonal1} - ${diagonal2} = ${diagonal1 - diagonal2}`

console.log(result)