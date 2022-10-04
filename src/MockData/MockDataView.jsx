import { Button, Paper } from "@mui/material";
import { generateObjectNested, generateRandomName } from "./mock-data-utils";

export default function MockDataView({}){

    function generateFlatMockData(){
        let mockData = generateRandomName()
        alert(JSON.stringify(mockData))
    }

    function generateNestedMockData(){
        let mockData = generateObjectNested()
        alert(JSON.stringify(mockData))
    }

    return (
        <Paper elevation={13} className='query-paper'>
            <Button onClick={generateFlatMockData}>
                Flat
            </Button>
            <br/>
            <Button onClick={generateNestedMockData}>
                Nested
            </Button>
            <br/>
            This page is dedicated to mock data generation
        </Paper>
    )
}