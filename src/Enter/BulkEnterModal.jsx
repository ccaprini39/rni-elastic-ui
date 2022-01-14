import { useEffect, useState } from "react";
import { FileCopy, Update } from "@mui/icons-material";
import { Alert, Box, Button, CircularProgress, IconButton, LinearProgress, Modal, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { indexPerson } from "../crud-utils/indexFunctions";

export default function BulkEnterUpload(){

    const [jsonData, setUploadedJsonData] = useState([])
    const [jsonToUpload, setJsonToUpload] = useState([])
    const [loadingProgress, setLoadingProgress] = useState(false)
    const [displayedProgress, setDisplayedProgress] = useState(false)
    const [loading, setLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const dataGridColumns = [
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'dob', headerName: 'DOB', width: 100},
    ]

    function handleJSONFile(e){
        const fileReader = new FileReader()
        const files = e.target.files
        fileReader.onload = async function (e) {
            let arrayOfObjects = await JSON.parse(e.target.result)
            setJsonToUpload(arrayOfObjects)
            arrayOfObjects = arrayOfObjects.map((person, index) => {
                return({
                    id : index,
                    name: person.name,
                    dob: person.dob
                })
            })
            setUploadedJsonData(arrayOfObjects)
            console.log(arrayOfObjects)
            setModalOpen(true)
        }
        fileReader.readAsText(files[0])
    }

    useEffect(() => {
        async function updateLoading(){
            if(loadingProgress === 100  || loadingProgress === 99) {
                setDisplayedProgress(loadingProgress)
                setLoading(false)
            }
        }
        console.log(loadingProgress)
        loading && updateLoading()
    },[loadingProgress])

    async function handleSubmit(){
        console.log('handling submit')
        async function uploadValue(person, progress){
            const response = await indexPerson(person)
            if (response === 200) console.log(`name: ${person.name}, dob: ${person.dob} indexed successfully`) 
            else console.log(`name: ${person.name}, dob: ${person.dob} failed to index`) 
            setLoadingProgress(progress)
        }
        jsonToUpload.forEach((person, index) => {
            const int = Math.floor(index*(100/jsonToUpload.length))
            uploadValue(person, int)
        })
        console.log(loadingProgress)
    }

    const style = {
        position: 'absolute',
        top: '10%',
        left: '20%',
        width: "60%",
        border: '2px solid #000',
        boxShadow: 24,
        height: "80%",
        p: 4,
      };

    function handleClose(){
        setModalOpen(false)
        setUploadedJsonData(null)
        setLoadingProgress(false)
    }

    function getFooter(size){
        console.log(size)
        if(size <= 100){
            return true
        } 
        else{
            return false
        }
    }

    return (
        <Paper elevation={10}>
            <div>
                Import JSON File
                <input
                    style={{display: 'none'}}
                    id='upload-button'
                    accept='.json'
                    type='file'
                    onChange={handleJSONFile}
                />
                <label className='upload-icon-button' htmlFor='upload-button'>
                    <IconButton color='primary' aria-label='upload-button' component='span'>
                        <FileCopy />
                    </IconButton>
                </label>
                <Modal
                    open={modalOpen}
                    onClose={handleClose}
                >
                    <Paper elevation={10} sx={style}>
                        <div style={{height: '100%', width: '100%'}}>
                            <h3>Uploaded File</h3>
                            <DataGrid style={{height: '88%'}} columns={dataGridColumns} rows={jsonData} hideFooter={getFooter(jsonData ? jsonData.length : 0)}/>
                            <div style={{display: 'inline-flex', width: '100%', justifyContent: 'space-between'}}>
                                <Button onClick={handleClose} color='warning' variant={'outlined'}>Close</Button>
                                {loadingProgress === false &&
                                    <Button variant={'contained'} onClick={handleSubmit}>Upload Data</Button>
                                }
                                {loadingProgress && loadingProgress < 99 &&
                                    <CircularProgress variant='determinate' value={loadingProgress} />
                                }
                                {loadingProgress === 100 || loadingProgress === 99 &&
                                    <Alert onClose={handleClose} severity='info'>Finished Upload</Alert>
                                }
                            </div>
                        </div>
                    </Paper>
                </Modal>
            </div>
        </Paper>
    )
}



