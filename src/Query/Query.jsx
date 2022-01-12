import { useState, useEffect } from "react"
import { queryPerson } from "../crud-utils/queryFunctions"
import QueryForm from "./QueryForm"

export default function Query({}){

    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [personObject, setPersonObject] = useState({
        'name': name,
        'dob': dob
    })

    useEffect(() => {
        setPersonObject({
            'name': name,
            'dob': dob
        })
    },[name, dob])

    async function handleSubmit(){
        const response = await queryPerson(personObject)
        console.log(response)
    }

    return(
        <>
            <QueryForm name={name} dob={dob} setName={setName} setDob={setDob} handleSubmit={handleSubmit} />
        </>
    )
}