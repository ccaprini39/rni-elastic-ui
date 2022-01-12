import { Box, Button, Paper, TextField } from '@mui/material'
import { useState, useEffect } from 'react'

export default function QueryForm({name, dob, setName, setDob, handleRegularSubmit}){

    const [formName, setFormName] = useState('')
    const [formDob, setFormDob] = useState('')

    useEffect(() => {
        setName(formName)
    },[formName])
    useEffect(() => {
        setDob(formDob)
    },[formDob])

    return(
        <Paper elevation={13} className='query-paper'>
            <h3 className='query-form-header'>Query</h3>
            <div className='query-form-item'>
                <TextField
                    onChange={(e) => setFormName(e.target.value)}
                    variant='outlined'
                    label='Name'
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
            <br/>
            <Button className='query-button'  
                onClick={handleRegularSubmit} 
                variant='outlined' 
                fullWidth
            >
                Query
            </Button>
        </Paper>
    )
}