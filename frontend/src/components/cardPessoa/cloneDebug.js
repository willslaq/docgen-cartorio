import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import avatar from '../../assets/images/avatar.png';
import avatarErro from '../../assets/images/avatarErro.jpg';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import ForwardIcon from '@material-ui/icons/Forward';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleIcon from '@material-ui/icons/AddCircle';



const useStyles = makeStyles(theme => ({
    controlaPaper: {
        padding: theme.spacing(2),
        marginTop: 50,
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
        width: 200,
    },
    paperPesquisa: {
        width: 200,
        marginTop: 50,  
    },
    controlaContainer: {
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
    },
    controlaArrow: {
        width: 100,
        height: 100,
        color: '#72bf44',
    },
}))

export default function CardPessoa() {

    const classes = useStyles();

    const [pesquisa, setPesquisa] = useState('');

    let pessoaFiltrada = resultadoPessoa.filter(
        (pessoa) => {
            return pessoa.nome.toLowerCase().indexOf(pesquisa) !== -1;
        }
    );

    return (
        <>
            <Grid Container align="center">
                <Paper className={classes.paperPesquisa}>
                    <TextField
                        className={classes.pesquisa}
                        id="pesquisar"
                        label="Pesquisar..."
                        variant="outlined"
                        value={pesquisa}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        onChange={e => setPesquisa(e.target.value.toLowerCase())}
                    />
                </Paper>
            </Grid>

            <Paper className={classes.controlaPaper}>
                <Container>
                    {pessoaFiltrada.length > 0 ? pessoaFiltrada.map(pessoa => (
                        <>
                            {console.log(pessoaFiltrada)}
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
                                    <ForwardIcon className={classes.controlaArrow} />
                                </Grid>
                            </Grid>
                            <Divider />
                        </>
                    ))
                        :
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
                                    Adicionar o Cliente "{pesquisa}"
                                </Typography>
                            </Grid>
                            <Grid item align="center" xs={4}>
                                <AddCircleIcon className={classes.controlaArrow} />
                            </Grid>
                        </Grid>
                    }
                </Container>
            </Paper>
        </>
    );
};

const resultadoPessoa = [
    { nome: 'Willinghan B. Tomaz', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Vinicius', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Leandro', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Willian', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Gerson', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Maria', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Leopolda', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Tunica', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Margarete', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Josefa', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Cleiton', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Cremilda', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Josefina', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Josesclaudilene', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Targarida', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Gunhild', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Gofrid', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Frey', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Freya', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Tyr', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Odin', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Thor', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Skati', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Fenrir', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
];
