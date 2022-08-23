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

function generateCurrentDate () {
    let current = new Date()
    let chosenday = current.getDate()
    let chosenmonth = current.getMonth()
    let chosenyear = current.getFullYear()

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return {day: chosenday, month: chosenmonth, monthName: months[chosenmonth], year: chosenyear}
}

export {generateCurrentDate}

const calendarDates = {months: [
    {
        name: "January",
        days: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    },
    {
        name: "February",
        days: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
    },
    {
        name: "March",
        days: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    },
    {
        name: "April",
        days: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    },
    {
        name: "May",
        days: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    },
    {
        name: "June",
        days: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    },
    {
        name: "July",
        days: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    },
    {
        name: "August",
        days: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    },
    {
        name: "September",
        days: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    },
    {
        name: "October",
        days: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    },
    {
        name: "November",
        days: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    },
    {
        name: "December",
        days: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    }],
    years: ["2022", "2023", "2024"]
}

export {calendarDates}

function formatNumber(num) {
    let stringNumber = num.toString()
    stringNumber = stringNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return stringNumber
}

export {formatNumber}