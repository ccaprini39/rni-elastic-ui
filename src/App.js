import logo from './logo.svg'
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import './App.css'
import { ViewData } from './ViewData/ViewData'
import Enter from './Enter/Enter'
import Query from './Query/Query'
import { createTheme, Paper } from '@mui/material'
import Nav from './Nav'
import { ThemeProvider } from '@emotion/react'
import MockDataView from './MockData/MockDataView'


export default function App(){

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <div >
      <ThemeProvider theme={darkTheme}>
        <Paper elevation={0} className='home-layout' >
          <BrowserRouter>
            <Paper elevation={12} className='nav'>
              <Nav />
            </Paper>
            <Paper elevation={10} className='body'>
              <Routes>
                <Route path='entry' element={<Enter />} />
                <Route path='query' element={<Query />} />
                <Route path='mock' element={<MockDataView />} />
              </Routes>
            </Paper>
          </BrowserRouter>
        </Paper>

      </ThemeProvider>
    </div>
  )
}