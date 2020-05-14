import React from 'react';
import './App.css';
import Routes from './routes';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

const theme = createMuiTheme({}, ptBR);


function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
}

export default App;
