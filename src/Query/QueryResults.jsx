import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function QueryResults({regularResults, rniResults}){

    console.log(regularResults)
    const transformedRegularData = regularResults.map((person, index) => {
        return({
            id : index,
            name: person.name,
            dob: person.dob,
            time: person.time
        })
    })
    const transformedRniData = rniResults.map((person, index) => {
        return({
            id : index,
            name: person.name,
            dob: person.dob,
            time: person.time
        })
    })
    console.log(rniResults)
    const Columns = [
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'dob', headerName: 'DOB', width: 100},
        {field: 'time', headerName: 'Time (ms)', width: 100},
    ]
    return(
        <Paper className='query-results-main' elevation={13}>
            {regularResults && rniResults && <Paper elevation={16} className='query-results-tables-container'>
                <Paper elevation={16}>
                    Regular
                    <DataGrid style={{height: '95%'}} columns={Columns} rows={transformedRegularData} hideFooter/>
                </Paper>
                <Paper elevation={16}>
                    RNI Results
                    <DataGrid style={{height: '95%'}} columns={Columns} rows={transformedRniData} hideFooter/>
                </Paper>
            </Paper>}
        </Paper>
    )
}

                /* <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Dob</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {regularResults.map((result) => {
                                {console.log(result)}
                                <TableRow
                                    key={result.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{result.name}</TableCell>
                                    <TableCell>{result.dob}</TableCell>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Dob</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rniResults.map((result) => {
                                
                                <TableRow
                                    key={result.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{result.name}</TableCell>
                                    <TableCell>{result.dob}</TableCell>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                 */