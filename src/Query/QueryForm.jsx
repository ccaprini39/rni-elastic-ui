import { Box, Button, Paper, TextField } from '@mui/material'
import { useState, useEffect } from 'react'

export default function QueryForm({name, dob, setName, setDob, handleSubmit}){

    const [formName, setFormName] = useState('')
    const [formDob, setFormDob] = useState('')

    useEffect(() => {
        setName(formName)
    },[formName])
    useEffect(() => {
        setDob(formDob)
    },[formDob])

    return(
        <Box component='form'>
            <h1>Query</h1>
            <TextField
                onChange={(e) => setFormName(e.target.value)}
                label='Name'
            />
            <TextField
                onChange={(e) => setFormDob(e.target.value)}
                label='DOB'
            />
            <Button onClick={handleSubmit}>
                Query
            </Button>
        </Box>
    )
}