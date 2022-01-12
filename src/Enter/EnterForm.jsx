import { Box, Button, Paper, TextField } from '@mui/material'
import { useState, useEffect } from 'react'

export default function EnterForm({name, dob, setName, setDob, handleSubmit}){

    const [formName, setFormName] = useState('')
    const [formDob, setFormDob] = useState('')

    useEffect(() => {
        setName(formName)
    },[formName])
    useEffect(() => {
        setDob(formDob)
    },[formDob])

    return(
        <Paper elevation={13}>
            <h3>Input</h3>
            <TextField
                onChange={(e) => setFormName(e.target.value)}
                label='Name'
                fullWidth
            />
            <br/>
            <TextField
                onChange={(e) => setFormDob(e.target.value)}
                label='DOB'
                fullWidth
            />
            <Button variant='outlined' onClick={handleSubmit}>
                Submit
            </Button>
        </Paper>
    )
}