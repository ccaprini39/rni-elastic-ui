import {v4 as uuidv4} from 'uuid'

function generateUuid(){
    return uuidv4()
}

const arrayOfMaleNames=[
    'James', 'Robert', 'John', 'Michael', 'David', 'William', 'Richard', 'Joseph', 'Thomas', 'Charles',
    'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua',
]

const arrayOfFemaleNames=[
    'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen',
    'Lisa', 'Nancy', 'Betty', 'Margaret', 'Sandra', 'Ashley', 'Kimberly', 'Emily', 'Donna', 'Michelle',
]

const arrayOfLastNames=[
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson',
    'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White'
]
const arrayOfGenders = ['male', 'female']

export function generateRandomName(){
    let name = ''
    const numOfNames = generateRandomNumber(1,4)
    const uuid = generateUuid()

    const gender = arrayOfGenders[Math.floor((Math.random()*arrayOfGenders.length))]

    const firstNames = gender === 'male' ? getNamesString(numOfNames, arrayOfMaleNames) : getNamesString(numOfNames, arrayOfFemaleNames)
    name += firstNames
    name += arrayOfLastNames[Math.floor((Math.random()*arrayOfLastNames.length))]

    const date = formatDate(randomDate(new Date(1955, 0, 1), new Date()))

    return {
        name: name,
        uuid: uuid,
        date: date
    }
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) ) + min
}

function getNamesString(number, listOfOptions){
    let result=''

    for( let i = 0; i < number; i++){
        const name = listOfOptions[Math.floor((Math.random()*listOfOptions.length))]
        result += `${name} `
    }

    return result
}


//Now generation of the nested objects
//so what I want is a random number between 1 and 20 of names
//and a random number of dobs between 1 and 20
//all of these tied together with a uuid
export function generateObjectNested(){
    const uuid = generateUuid()
    const numOfEvents = generateRandomNumber(1,20)
    const gender = arrayOfGenders[Math.floor((Math.random()*arrayOfGenders.length))]
    
    const names = generateArrayOfNames(numOfEvents)
    const dobs = generateArrayOfDobs(numOfEvents)

    return {
        uuid: uuid,
        names: names,
        dobs: dobs
    }
    
}

function generateArrayOfNames(num, gender){
    let result = []
    
    for (let i = 0; i < num; i++){
        const numOfNames = generateRandomNumber(1,4)
        const firstNames = gender === 'male' ? getNamesString(numOfNames, arrayOfMaleNames) : getNamesString(numOfNames, arrayOfFemaleNames)
        result.push(firstNames + arrayOfLastNames[Math.floor((Math.random()*arrayOfLastNames.length))])
    }
    return result
}

function generateArrayOfDobs(num){
    let result = []
    for (let i = 0; i < num; i++){
        result.push(formatDate(randomDate(new Date(1955, 0, 1), new Date())))
    }
    return result
}
