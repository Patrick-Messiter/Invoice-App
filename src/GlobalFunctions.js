function generateRandomId () {
    const letters = ["A", "B", "C", "D", "E", "F", "G"]
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    function randomLetter(letters) {
        return letters[Math.floor(Math.random() * letters.length)]
    }

    function randomNumber(numbers) {
        return numbers[Math.floor(Math.random() * numbers.length)]
    }

    let id = `${randomLetter(letters)}${randomLetter(letters)}${randomNumber(numbers)}${randomNumber(numbers)}${randomNumber(numbers)}${randomNumber(numbers)}`
    return id
}

export {generateRandomId}