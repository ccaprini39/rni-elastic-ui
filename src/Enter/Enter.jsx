import { Alert, Button } from "@mui/material"
import { useState, useEffect } from "react"
import { bulkUpload, indexPerson } from "../crud-utils/indexFunctions"
import { persons } from "../mock-data/MockData1000"
import EnterForm from "./EnterForm"

export default function Enter({}){

    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [personObject, setPersonObject] = useState({
        'name': name,
        'dob': dob
    })
    const [alertStatus, setAlertStatus] = useState(0)

    useEffect(() => {
        setPersonObject({
            'name': name,
            'dob': dob
        })
    },[name, dob])

    async function handleSubmit(){
        const response = await indexPerson(personObject)
        console.log(response)
        setAlertStatus(200)
    }

    function handleBulkEntry(){
        bulkUpload(persons)
    }


    return(
        <>
            <EnterForm name={name} dob={dob} setName={setName} setDob={setDob} handleSubmit={handleSubmit} />
            {alertStatus === 200 &&
                <Alert severity='success' onClose={() => setAlertStatus(0)}>
                    Name successfully added
                </Alert>
            }
            {/* <Button onClick={handleBulkEntry}>
                Bulk Upload
            </Button> */}
        </>
    )
}