import React from 'react';
import './App.css';
import Routes from './routes';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#0066b3",
        },
        secondary: {
            main: "#72bf44",
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
}, ptBR);


function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
}

export default App;
