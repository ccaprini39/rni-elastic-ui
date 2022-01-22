export async function queryRniPerson(personJson){
    console.log(personJson)
    const response = await fetch('http://localhost:8080/query-rni-name-single', 
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
    const response = await fetch('http://localhost:8080/query-name-single', 
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
    const response = await fetch('http://localhost:8080/query-advanced-rni-name-single', 
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