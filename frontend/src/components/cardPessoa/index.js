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
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

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
    dialogPadding: {
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2),
        },
    },
    dialogForm: {
        width: '100%',
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
}))

export default function CardPessoa() {

    const classes = useStyles();

    const [pesquisa, setPesquisa] = useState('');
    const [filtro, setFiltro] = useState(1);
    const [open, toggleOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [dialogValue, setDialogValue] = useState({
        nome: '',
        cpf: '',
    });
    const handleClose = () => {
        setDialogValue({
            nome: '',
            cpf: '',
        });

        toggleOpen(false);
    };
    

    const handleSubmit = (event) => {
        console.log("Salvei no banco: ", 
                    ' \nCPF:', dialogValue.cpf,
                    ' \nNome:', dialogValue.nome, 
                    ' \nRG', dialogValue.rg,
                    ' \nEmail', dialogValue.mail,
                    ' \nTelefone', dialogValue.fone,
                    ' \nCelular', dialogValue.celular,
                    )
        event.preventDefault();
        setValue({
            nome: dialogValue.nome,
            cpf: dialogValue.cpf,
        });
    };

    function handleDialog() {
            toggleOpen(true);
            if(filtro === 1) {
                setDialogValue({
                    nome: pesquisa,
                    cpf: '',
                });
            } else {
                setDialogValue({
                    nome: '',
                    cpf: pesquisa,
                });
            }
    };

    let pessoaFiltrada = resultadoPessoa.filter(
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
                                    classes: {
                                        icon: classes.icon,
                                    }
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
                                    <IconButton aria-label="Add" onClick={handleDialog}>
                                        <AddCircleIcon className={classes.controlaArrow} />
                                    </IconButton>
                                </Grid>
                            </Grid>

                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <form onSubmit={handleSubmit}>
                                    <DialogTitle id="form-dialog-title">Adicionar um novo cliente</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Está tentando utilizar um cliente não cadastrado? Cadastre aqui:
                                        </DialogContentText>
                                        <Grid container className={classes.dialogPadding}>
                                            <Grid item xs={12} className={classes.dialogPadding}>
                                                <TextField 
                                                    autoFocus
                                                    label="Nome"
                                                    className={classes.dialogForm}
                                                    margin="dense"
                                                    id="name"
                                                    value={dialogValue.nome}
                                                    onChange={(event) => setDialogValue({
                                                        ...dialogValue, nome: event.target.value
                                                    })}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} className={classes.dialogPadding}>
                                                <TextField
                                                    label="CPF"
                                                    className={classes.dialogForm}
                                                    margin="dense"
                                                    id="CPF"
                                                    value={dialogValue.cpf}
                                                    onChange={(event) => setDialogValue({
                                                        ...dialogValue, cpf: event.target.value
                                                    })}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} className={classes.dialogPadding}>
                                                <TextField 
                                                    label="RG"
                                                    margin="dense"
                                                    id="RG"
                                                    className={classes.dialogForm}
                                                    value={dialogValue.rg}
                                                    onChange={(event) => setDialogValue({
                                                        ...dialogValue, rg: event.target.value
                                                    })}
                                                />
                                            </Grid>
                                            <Grid item xs={12} className={classes.dialogPadding}>
                                                <TextField
                                                    label="e-mail"
                                                    margin="dense"
                                                    id="mail"
                                                    className={classes.dialogForm}
                                                    value={dialogValue.mail}
                                                    onChange={(event) => setDialogValue({
                                                        ...dialogValue, mail: event.target.value
                                                    })}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} className={classes.dialogPadding}>
                                                <TextField
                                                    label="Telefone Principal"
                                                    margin="dense"
                                                    id="fone"
                                                    className={classes.dialogForm}
                                                    value={dialogValue.fone}
                                                    onChange={(event) => setDialogValue({
                                                        ...dialogValue, fone: event.target.value
                                                    })}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} className={classes.dialogPadding}>
                                                <TextField
                                                    label="Telefone Secundário"
                                                    margin="dense"
                                                    id="celular"
                                                    className={classes.dialogForm}
                                                    value={dialogValue.celular}
                                                    onChange={(event) => setDialogValue({
                                                        ...dialogValue, celular: event.target.value
                                                    })}
                                                />
                                            </Grid>
                                        </Grid>
                                    </DialogContent>
                                    <DialogActions>
                                        <Grid container>
                                            <Grid item align="right" xs={6}>
                                                <Button
                                                    className={classes.buttonControl}
                                                    variant="contained" 
                                                    onClick={handleClose} 
                                                    color="danger"
                                                    >
                                                    Cancelar
                                                </Button>
                                            </Grid>
                                            <Grid item align="left" xs={6}>
                                                <Button 
                                                    className={classes.buttonControl}
                                                    type="submit" 
                                                    variant="contained" 
                                                    color="primary"
                                                >
                                                    Adicionar
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </DialogActions>
                                </form>
                            </Dialog>
                        </>
                    }
                </Container>
            </Paper>
        </>
    );
};

const resultadoPessoa = [
    { nome: 'Willinghan B. Tomaz', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Vinicius', cpf: '12341574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Leandro', cpf: '45641574958', fone: '123935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Willian', cpf: '78941574958', fone: '674935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Gerson', cpf: '12341574958', fone: '456935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Maria', cpf: '10041574958', fone: '789935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Leopolda', cpf: '10041574958', fone: '123935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Tunica', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Mafonearete', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Josefa', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Cleiton', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Cremilda', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Josefina', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Josesclaudilene', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Tafonearida', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Gunhild', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Gofrid', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Frey', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Freya', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Tyr', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Odin', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Thor', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Skati', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
    { nome: 'Fenrir', cpf: '10041574958', fone: '44998317130', cidade: 'Cruziero do Oeste' },
];
