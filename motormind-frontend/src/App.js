import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline} from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home'; 


const theme = createTheme({
  palette: {
    primary: {
      main: '#5B57D2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Routes>
            <Route index element={<Home/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
