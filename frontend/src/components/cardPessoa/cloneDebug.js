import React, { useState, useEffect } from 'react';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import avatar from '../../assets/images/avatar.png';
import avatarErro from '../../assets/images/avatarErro.jpg';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import api from '../../services/api';
import AddButton from '../AddPessoaButton/index';

const removeFocus = createMuiTheme({
    overrides: {
        MuiSelect: {
            select: {
                "&:focus": {
                    background: "&labelcolor"
                }
            }
        }
    }
});

const useStyles = makeStyles(theme => ({
    controlaLista: {
        borderRadius: 20,
        padding: theme.spacing(2),
        marginTop: 30,
        marginBottom: 20,
        [theme.breakpoints.down('sm')]: {
            padding: 0,
        },
    },
    controlaNome: {
        fontSize: '1.4em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1em',
        },
    },
    controlaInfos: {
        fontSize: '1em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8em',
        },
    },
    controlaAvatar: {
        borderRadius: 100,
        height: 180,
        width: 180,
        [theme.breakpoints.down('sm')]: {
            height: 80,
            width: 80,
        },
    },
    pesquisa: {
        width: '90%',
        padding: theme.spacing(1),
    },
    paperPesquisa: {
        [theme.breakpoints.down('sm')]: {
            width: "75%",
        },
        borderRadius: '0px 30px 30px 0px',
    },
    controlaContainer: {
        padding: theme.spacing(2),
        alignItems: 'center',
    },
    controlaFiltro: {
        [theme.breakpoints.down('sm')]: {
            width: '25%',
        },
        backgroundColor: "#72bf44",
        borderRadius: "30px 0px 0px 30px",
    },
    controlaArrow: {
        width: 100,
        height: 100,
        color: '#72bf44',
        [theme.breakpoints.down('sm')]: {
            height: 40,
            width: 40,
        },
    },
    formControl: {
        padding: theme.spacing(1),
    },
    buttonControl: {
        margin: theme.spacing(1),
    },
    controlaBarraPesquisa: {
        justifyContent: 'center',
        marginTop: 30,
    },
    selectStyle: {
        fontWeight: 'bold',
        color: '#FFF',
    },
    MuiSelectIcon: {
        color: "#FFF"
    },
    icon: {
        fill: '#fff',
    },
    controlaAddButtonInicial: {
        position: "letf-bottom",
        display: "float",
    },
}))

const estiloAddButton = { 
        width: "width: 100,",
        height: "height: 100,",
        color: "color: '#72bf44',",
        breakpoints: "[theme.breakpoints.down('sm')]",
        height: "height: 40,",
        width: "width: 40,",
}

export default function CardPessoa() {

    const classes = useStyles();

    const [pesquisa, setPesquisa] = useState('');
    const [filtro, setFiltro] = useState(1);
    const [listaPessoa, setListaPessoa] = useState([]);
    

    useEffect(
        () => {
            async function search() {
                const resultadoPessoaAPI = await api.post("home");
                console.log(resultadoPessoaAPI);
                setListaPessoa(resultadoPessoaAPI.data);
            }

            
            search()
            
        }, []
    );
        

    let pessoaFiltrada = listaPessoa.filter(
        (pessoa) => {
            if (filtro === 1) {
                return pessoa.nome.toLowerCase().indexOf(pesquisa) !== -1;
            } else {
                return pessoa.cpf.toLowerCase().indexOf(pesquisa) !== -1;
            }
        }
    );

    function retornoVazio() {
        if (filtro === 1) {
            return <>Adicionar o Cliente "{pesquisa}"</>;
        } else {
            return <>Adicionar o CPF "{pesquisa}"</>;
        }
    };

    const handleChangeFiltro = event => {
        setFiltro(event.target.value);
    }

    return (
        <>
            <Grid container className={classes.controlaBarraPesquisa} alignItems="center">
                <Paper className={classes.controlaFiltro}>
                    <Grid item>
                        <MuiThemeProvider theme={removeFocus}>
                            <FormControl className={classes.formControl}>
                                <Select
                                    value={filtro}
                                    onChange={handleChangeFiltro}
                                    disableUnderline={true}
                                    className={classes.selectStyle}
                                    >
                                    <MenuItem value={1}>Nome</MenuItem>
                                    <MenuItem value={2}>CPF</MenuItem>
                                </Select>
                            </FormControl>
                        </MuiThemeProvider>
                    </Grid>
                </Paper>
                <Paper className={classes.paperPesquisa}>
                    <Grid item>
                            <TextField
                                className={classes.pesquisa}
                                id="pesquisar"
                                value={pesquisa}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                    disableUnderline: true,
                                    // classes: {
                                    //     icon: classes.icon,
                                    // }
                                }}
                                onChange={e => setPesquisa(e.target.value.toLowerCase())}
                            />
                    </Grid>
                </Paper>
            </Grid>

            <Paper className={classes.controlaLista}>
                <Container>
                    {pessoaFiltrada.length > 0 ? pessoaFiltrada.map(pessoa => (
                        <>
                            <Grid container className={classes.controlaContainer}>
                                <Grid item xs={4}>
                                    <img alt="" src={avatar} className={classes.controlaAvatar} />
                                </Grid>
                                <Grid item xs={4}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography
                                                variant="h4"
                                                component="h4"
                                                gutterBottom
                                                className={classes.controlaNome}
                                                color="primary"
                                            >
                                                {pessoa.nome}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography
                                                variant="h6"
                                                component="h6"
                                                gutterBottom
                                                className={classes.controlaInfos}
                                            >
                                                {pessoa.cpf}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                component="h6"
                                                gutterBottom
                                                className={classes.controlaInfos}
                                            >
                                                {pessoa.rg}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                component="h6"
                                                gutterBottom
                                                className={classes.controlaInfos}
                                            >
                                                {pessoa.cidade}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4} align="center">
                                    <ArrowForwardIosIcon className={classes.controlaArrow} />
                                </Grid>
                            </Grid>
                            <Divider />
                        </>
                    ))
                        :
                        <>
                            <Grid container className={classes.controlaContainer}>
                                <Grid item xs={4}>
                                    <img alt="" src={avatarErro} className={classes.controlaAvatar} />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        className={classes.controlaNome}
                                    >
                                        {retornoVazio()}
                                    </Typography>
                                </Grid>
                                <Grid item align="center" xs={4}>
                                    <AddButton estilo={estiloAddButton} />
                                </Grid>
                            </Grid>
                        </>
                    }
                </Container>
            </Paper>
        </>
    );
};
