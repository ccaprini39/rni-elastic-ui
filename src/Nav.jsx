import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <ButtonGroup
            orientation='vertical'
            variation='contain'
            fullWidth
        >

            <Button
                style={{width: 'auto'}}
                component='button'
                variant='outlined'
            >
                <Link to={'/query'} style={{ textDecoration: 'none', color: 'white' }}>
                    Query
                </Link>
            </Button>
            <Button
                component='button'
                variant='outlined'
                
            >
                <Link to={'/entry'} style={{ textDecoration: 'none', color: 'white' }}>
                    Entry
                </Link>
            </Button>

        </ButtonGroup>
    )
}