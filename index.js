const challengeFunction = function(cell1, cell2){

    return isWhiteColor(cell1) === isWhiteColor(cell2)
}

function isWhiteColor(cell) { 
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H"]
    let position = cell.split('')
    return (!isPar(letters.indexOf(position[0]) + 1) && isPar(position[1])) || (isPar(letters.indexOf(position[0]) + 1) && !isPar(position[1]))
}

function isPar(number){
    return number % 2 == 0
}
module.exports = challengeFunction
