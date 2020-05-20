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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIcon from '@material-ui/icons/Phone';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PersonIcon from '@material-ui/icons/Person';

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
        width: 300,
    },
    paperPesquisa: {
        width: 300,
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
    dialogPadding: {
        padding: theme.spacing(2),
    },
    dialogForm: {
        width: '100%',
    }
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
        rg: '',
    });
    const handleClose = () => {
        setDialogValue({
            nome: '',
            cpf: '',
            rg: '',
        });

        toggleOpen(false);
    };

    const handleSubmit = (event) => {
        console.log("Salvei no banco: ", dialogValue.cpf, dialogValue.nome, dialogValue.rg)
        event.preventDefault();
        setValue({
            nome: dialogValue.nome,
            cpf: dialogValue.cpf,
            rg: dialogValue.rg,
        });
    };

    function handleDialog() {
            toggleOpen(true);
            if(filtro === 1) {
                setDialogValue({
                    nome: pesquisa,
                    cpf: '',
                    rg: '',
                });
            } else {
                setDialogValue({
                    nome: '',
                    cpf: pesquisa,
                    rg: '',
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
            <Grid Container align="center">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filtro}
                        onChange={handleChangeFiltro}
                    >
                        <MenuItem value={1}>Nome</MenuItem>
                        <MenuItem value={2}>CPF</MenuItem>
                    </Select>
                </FormControl>
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
                                                <Grid container spacing={1} position="start">
                                                    <Grid item>
                                                        <PersonIcon />
                                                    </Grid>
                                                    <Grid item  className={classes.dialogForm}>
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
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6} className={classes.dialogPadding}>
                                                <TextField 
                                                    autoFocus
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
                                            <Grid item xs={6} className={classes.dialogPadding}>
                                                <TextField 
                                                    label="RG"
                                                    autoFocus
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
                                                <Grid container spacing={1} alignItems="flex-end">
                                                    <Grid item>
                                                        <ContactMailIcon />
                                                    </Grid>
                                                    <Grid>
                                                        <TextField
                                                            label="e-mail"
                                                            autoFocus
                                                            margin="dense"
                                                            id="mail"
                                                            className={classes.dialogForm}
                                                            value={dialogValue.mail}
                                                            onChange={(event) => setDialogValue({
                                                                ...dialogValue, mail: event.target.value
                                                            })}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6} className={classes.dialogPadding}>
                                                <Grid container spacing={1} alignItems="flex-end">
                                                    <Grid item>
                                                        <PhoneIcon />
                                                    </Grid>
                                                    <Grid item>
                                                        <TextField
                                                            label="Telefone"
                                                            autoFocus
                                                            margin="dense"
                                                            id="fone"
                                                            className={classes.dialogForm}
                                                            value={dialogValue.fone}
                                                            onChange={(event) => setDialogValue({
                                                                ...dialogValue, fone: event.target.value
                                                            })}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6} className={classes.dialogPadding}>
                                                <Grid container spacing={1} alignItems="flex-end">
                                                    <Grid item>
                                                        <PhoneAndroidIcon />
                                                    </Grid>
                                                    <Grid item>
                                                        <TextField
                                                            label="Celular"
                                                            autoFocus
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
                                            </Grid>
                                        </Grid>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button 
                                            variant="contained" 
                                            onClick={handleClose} 
                                            color="danger"
                                            >
                                            Cancelar
                                        </Button>
                                        <Button 
                                            type="submit" 
                                            variant="contained" 
                                            color="primary"
                                        >
                                            Adicionar
                                        </Button>
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
    { nome: 'Willinghan B. Tomaz', cpf: '10041574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Vinicius', cpf: '12341574958', rg: '143935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Leandro', cpf: '45641574958', rg: '123935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Willian', cpf: '78941574958', rg: '674935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Gerson', cpf: '12341574958', rg: '456935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Maria', cpf: '10041574958', rg: '789935957', cidade: 'Cruziero do Oeste' },
    { nome: 'Leopolda', cpf: '10041574958', rg: '123935957', cidade: 'Cruziero do Oeste' },
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
