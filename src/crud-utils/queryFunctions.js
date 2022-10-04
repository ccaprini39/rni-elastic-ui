import {SPRING_BOOT_APP_URL} from './urlEndpoints'

export async function queryRniPerson(personJson){
    console.log(personJson)
    const response = await fetch(`${SPRING_BOOT_APP_URL}/query-rni-name-single`, 
        {
            method: 'POST',
            body: JSON.stringify(personJson),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        const body = await response.json()
    return body
}

export async function queryPerson(personJson){
    console.log(personJson)
    const response = await fetch(`${SPRING_BOOT_APP_URL}/query-name-single`, 
        {
            method: 'POST',
            body: JSON.stringify(personJson),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        const body = await response.json()
    return body
}

export async function advancedQueryRniPerson(advancedRequest){
    console.log(advancedRequest)
    const response = await fetch(`${SPRING_BOOT_APP_URL}/query-advanced-rni-name-single`, 
        {
            method: 'POST',
            body: JSON.stringify(advancedRequest),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        const body = await response.json()
    return body
}