import { useState, useEffect } from "react"
import { advancedQueryRniPerson, queryPerson, queryRniPerson } from "../crud-utils/queryFunctions"
import QueryForm from "./QueryForm"
import QueryFormAdvanced from "./QueryFormAdvanced"
import QueryResults from "./QueryResults"

export default function Query({}){

    const [name, setName] = useState('')
    const [window, setWindow] = useState('')
    const [dob, setDob] = useState('')
    const [nameWeight, setNameWeight] = useState(1)
    const [threshold, setThreshold] = useState('')
    const [dobWeight, setDobWeight] = useState(1)
    const [personObject, setPersonObject] = useState({
        'name': name,
        'window': window,
        'dob' : dob
    })
    const [advancedRequest, setAdvancedRequest] = useState({
        'name': name,
        'window': window,
        'dob' : dob,
        'threshold' : threshold,
        'nameWeight': nameWeight,
        'dobWeight': dobWeight
    })
    const [regularResults, setRegularResults] = useState(null)
    const [rniResults, setRniResults] = useState(null)
    const [loading, setLoading] = useState(true)
    const [view, setView] = useState('normal')
    function toggleView(){
        if(view === 'normal') setView('advanced')
        if(view === 'advanced') setView('normal')
    }

    useEffect(() => {
        setAdvancedRequest({
            'name': name,
            'window': window,
            'dob' : dob,
            'threshold' : threshold,
            'nameWeight': nameWeight,
            'dobWeight': dobWeight
        })
    },[name, window, dob, threshold, dobWeight, nameWeight])

    useEffect(() => {
        setPersonObject({ 
            'name': name,
            'window': window,
            'dob': dob
        })
    },[name, window, dob])

    async function handleRegularSubmit(){
        setLoading(true)
        const regularResponse = await queryPerson(personObject)
        setRegularResults(regularResponse)
        const rniResponse = await queryRniPerson(personObject)
        setRniResults(rniResponse)
        setLoading(false)
    }

    async function handleAdvancedSubmit(){
        setLoading(true)
        const regularResponse = await queryPerson(personObject)
        setRegularResults(regularResponse)
        const rniResponse = await advancedQueryRniPerson(advancedRequest)
        setRniResults(rniResponse)
        setLoading(false)
    }

    return(
        <>
            {view === 'normal' ?

            <QueryForm
                name={name} dob={dob} window={window} 
                threshold={threshold} nameWeight={nameWeight} dobWeight={dobWeight}
                setName={setName} setWindow={setWindow} setDob={setDob} 
                toggleSwitch={toggleView}
                setThreshold={setThreshold} setNameWeight={setNameWeight} setDobWeight={setDobWeight}
                handleRegularSubmit={handleRegularSubmit} 
                view={view}
            />

            :

            <QueryFormAdvanced
                name={name} dob={dob} window={window} 
                threshold={threshold} nameWeight={nameWeight} dobWeight={dobWeight}
                setName={setName} setWindow={setWindow} setDob={setDob} 
                toggleSwitch={toggleView}
                setThreshold={setThreshold} setNameWeight={setNameWeight} setDobWeight={setDobWeight}
                handleRegularSubmit={handleAdvancedSubmit} 
                view={view}
            />

            }
            <br/>
            {!loading && <QueryResults regularResults={regularResults} rniResults={rniResults}/>}
        </>
    )
}