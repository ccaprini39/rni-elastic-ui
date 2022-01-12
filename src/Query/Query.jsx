import { useState, useEffect } from "react"
import { queryPerson, queryRniPerson } from "../crud-utils/queryFunctions"
import QueryForm from "./QueryForm"
import QueryResults from "./QueryResults"

export default function Query({}){

    const [name, setName] = useState(null)
    const [dob, setDob] = useState(null)
    const [personObject, setPersonObject] = useState({
        'name': name,
        'dob': dob
    })
    const [regularResults, setRegularResults] = useState(null)
    const [rniResults, setRniResults] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setPersonObject({ 
            'name': name,
            'dob': dob
        })
    },[name, dob])

    async function handleRegularSubmit(){
        setLoading(true)
        const regularResponse = await queryPerson(personObject)
        console.log(regularResponse)
        setRegularResults(regularResponse)
        const rniResponse = await queryRniPerson(personObject)
        console.log(rniResults)
        setRniResults(rniResponse)
        setLoading(false)
    }

    return(
        <>
            <QueryForm name={name} dob={dob} setName={setName} setDob={setDob} handleRegularSubmit={handleRegularSubmit} />
            <br/>
            {!loading && <QueryResults regularResults={regularResults} rniResults={rniResults}/>}
        </>
    )
}