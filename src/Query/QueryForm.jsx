import { Box, Button, FormControlLabel, FormGroup, Paper, Switch, TextField } from '@mui/material'
import { useState, useEffect } from 'react'

export default function QueryForm({ name, window, dob, toggleSwitch,
    threshold, nameWeight, dobWeight,
    setName, setWindow, setDob, 
    setThreshold, setNameWeight,setDobWeight,
    handleRegularSubmit, view
    }){

    const [formName, setFormName] = useState('')
    const [formWindow, setFormWindow] = useState('')
    const [formDob, setFormDob] = useState('')

    useEffect(() => {
        setName(formName)
    },[formName])
    useEffect(() => {
        setWindow(formWindow)
    },[formWindow])
    useEffect(() => {
        setDob(formDob)
    },[formDob])

    return(
        <Paper elevation={13} className='query-paper'>
            <div className='query-form-row'>
                <h3>Query</h3>
                <FormGroup>
                    <FormControlLabel control={<Switch onChange={toggleSwitch} />} label="Advanced" />
                </FormGroup>
            </div>
            <div className='query-form-item'>
                <TextField
                    onChange={(e) => setFormName(e.target.value)}
                    error={!name.length >= 1}
                    variant='outlined'
                    label='Name'
                    fullWidth
                />
                <TextField
                    onChange={(e) => setFormDob(e.target.value)}
                    error={!dob.length >= 1}
                    variant='outlined'
                    label='DOB'
                    fullWidth
                />
                <TextField
                    onChange={(e) => setFormWindow(e.target.value)}
                    error={!window.length >= 1}
                    variant='outlined'
                    label='Window'
                    fullWidth
                />
            </div>
            {/* <div className='query-form-item'>
                <TextField
                    onChange={(e) => setFormDob(e.target.value)}
                    label='DOB'
                    fullWidth
                />
            </div> */}
            <Button className='query-button'  
                onClick={handleRegularSubmit} 
                variant='contained' 
                fullWidth
            >
                Query
            </Button>
        </Paper>
    )
}