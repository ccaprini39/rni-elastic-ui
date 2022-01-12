import { useState, useEffect } from "react"
import { indexPerson } from "../crud-utils/indexFunctions"
import EnterForm from "./EnterForm"

export default function Enter({}){

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

    function handleSubmit(){
        indexPerson(personObject)
    }


    return(
        <>
            <EnterForm name={name} dob={dob} setName={setName} setDob={setDob} handleSubmit={handleSubmit} />
        </>
    )
}