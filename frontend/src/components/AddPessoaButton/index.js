import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import api from '../../services/api';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme, params) => ({
    dialogPadding: {
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2),
        },
    },
    dialogForm: {
        width: '100%',
    },
    buttonAdd: {
        width: 100,
        height: 100,
        color: '#72bf44',
        [theme.breakpoints.down('sm')]: {
            height: 40,
            width: 40,
        },
    }
}))

export default function AddButton(props) {
    console.log('props', props);
    const classes = useStyles();
    
    const [open, toggleOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [dialogValue, setDialogValue] = useState({
        nome: '',
        cpf: '',
    });

    function handleDialog() {
        toggleOpen(true);
        // if(filtro === 1) {
        //     setDialogValue({
        //         nome: pesquisa,
        //         cpf: '',
        //     });
        // } else {
        //     setDialogValue({
        //         nome: '',
        //         cpf: pesquisa,
        //     });
        // }
    };

    const handleClose = () => {
        setDialogValue({
            nome: '',
            cpf: '',
        });

        toggleOpen(false);
    };
    
    let dataSend = {
        nome: dialogValue.nome,
        cpf: dialogValue.cpf,
        rg: dialogValue.rg,
        email: dialogValue.email,
        fonePrincipal: dialogValue.fonePrincipal,
        foneSecundario: dialogValue.foneSecundario,
    }

    const handleSubmit = async (event) => {
        const resultadoCadastroPessoa = await api.post("pessoa-add", dataSend);
        console.log(resultadoCadastroPessoa);
        event.preventDefault();
        setValue({
            nome: dialogValue.nome,
            cpf: dialogValue.cpf,
        });
    };

    return (
        <>
            <IconButton aria-label="Add" onClick={handleDialog}>
                <AddCircleIcon className={classes.buttonAdd} />
            </IconButton>

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
                                    value={dialogValue.email}
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
                                    value={dialogValue.fonePrincipal}
                                    onChange={(event) => setDialogValue({
                                        ...dialogValue, fonePrincipal: event.target.value
                                    })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} className={classes.dialogPadding}>
                                <TextField
                                    label="Telefone Secundário"
                                    margin="dense"
                                    id="celular"
                                    className={classes.dialogForm}
                                    value={dialogValue.foneSecundario}
                                    onChange={(event) => setDialogValue({
                                        ...dialogValue, foneSecundario: event.target.value
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
    )
}