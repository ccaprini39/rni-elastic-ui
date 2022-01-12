import { ELASTICSEARCH_URL } from "./urlEndpoints"

export async function getAllIdices(){
    const response = await fetch( `${ELASTICSEARCH_URL}_cat/indices`, 
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        const responseJson = response.body
        console.log(response.json())
    return response
}

export async function createApiKey(){
    const response = await fetch( `${ELASTICSEARCH_URL}_security/api_key`, 
        {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: {
                "name" : "api-key"
            }
        })
        console.log(response)
        const responseJson = response.json()
        console.log(responseJson)
    return response
}


export async function helloWorldFetch(){
    const response = await fetch('http://localhost:8080/hello', 
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        const body = await response.json()
    return body
}

export async function checkIndexExists(){
    const jsonBody = {"name":"namesearch"}
    const response = await fetch('http://localhost:8080/checkIndex', 
        {
            method: 'POST',
            body: JSON.stringify(jsonBody),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        const body = await response.json()
    return body
}

export async function createIndex(){
    const jsonBody = {"name":"namesearch"}
    const response = await fetch('http://localhost:8080/createIndex', 
        {
            method: 'POST',
            body: JSON.stringify(jsonBody),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        const body = await response.json()
    return body
}

export async function indexPerson(personJson){
    console.log(personJson)
    const response = await fetch('http://localhost:8080/index-single', 
        {
            method: 'POST',
            body: JSON.stringify(personJson),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        const status = response.status
    return status
}

export async function bulkUpload(arrayOfPersons){
    arrayOfPersons.forEach(person => {
        const response = indexPerson(person)
    })
    // for (const [person, index] of arrayOfPersons.entries()) {
        
    //     console.log(person)
    //     console.log(index)
    // }
}