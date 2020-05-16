import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const filter = createFilterOptions();

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 100,
    }
}))


export default function FreeSoloCreateOptionDialog() {
    const [value, setValue] = useState(null);
    const [open, toggleOpen] = useState(false);


    const [filtro, setFiltro] = useState(1);

    const classes = useStyles();

    const handleClose = () => {
        setDialogValue({
            nome: '',
            cpf: '',
            rg: '',
        });

        toggleOpen(false);
    };

    const [dialogValue, setDialogValue] = useState({
        nome: '',
        cpf: '',
        rg: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue({
            nome: dialogValue.nome,
            cpf: dialogValue.cpf,
            rg: dialogValue.rg,
        });

        handleClose();
    };

    const handleChangeFiltro = event => {
        setFiltro(event.target.value);
    }

    function SelecionaFiltros() {

        return (
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
                    <MenuItem value={3}>RG</MenuItem>
                </Select>
            </FormControl>
        )
    }

    return (
        <React.Fragment>
            <Grid container style={{ marginTop: 50 }}>
                <Grid item xs={6} align="right">
                    <Paper color="primary">
                        <SelecionaFiltros />
                    </Paper>
                </Grid>
                <Grid item xs={6} align="left">
                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                            if (typeof newValue === 'string') {
                                // timeout to avoid instant validation of the dialog's form.
                                setTimeout(() => {
                                    toggleOpen(true);
                                    if (filtro === 1) {
                                        setDialogValue({
                                            nome: newValue,
                                            cpf: '',
                                            rg: '',
                                        });
                                    } else if (filtro === 2) {
                                        setDialogValue({
                                            nome: '',
                                            cpf: newValue,
                                            rg: '',
                                        })
                                    } else {
                                        setDialogValue({
                                            nome: '',
                                            cpf: '',
                                            rg: newValue,
                                        })
                                    }
                                });
                                return;
                            }

                            if (newValue && newValue.inputValue) {
                                toggleOpen(true);
                                if (filtro === 1) {
                                    setDialogValue({
                                        nome: newValue.inputValue,
                                        cpf: '',
                                        rg: '',
                                    });
                                } else if (filtro === 2) {
                                    setDialogValue({
                                        nome: '',
                                        cpf: newValue.inputValue,
                                        rg: '',
                                    });
                                } else {
                                    setDialogValue({
                                        nome: '',
                                        cpf: '',
                                        rg: newValue.inputValue,
                                    });
                                }

                                return;
                            }

                            setValue(newValue);
                        }}
                        filterOptions={(options, params) => {
                            const filtered = filter(options, params);

                            if (params.inputValue !== '') {
                                if (filtro === 1) {
                                    filtered.push({
                                        inputValue: params.inputValue,
                                        nome: `Adicionar Pessoa: "${params.inputValue}"`,
                                    });
                                } else if (filtro === 2) {
                                    filtered.push({
                                        inputValue: params.inputValue,
                                        nome: `Adicionar o CPF: "${params.inputValue}"`
                                    })
                                } else {
                                    filtered.push({
                                        inputValue: params.inputValue,
                                        nome: `Adicionar o RG: "${params.inputValue}"`
                                    })
                                }
                            }

                            return filtered;
                        }}
                        id="free-solo-dialog-demo"
                        options={resultadoPessoa}
                        getOptionLabel={(option) => {
                            // e.g value selected with enter, right from the input
                            if (typeof option === 'string') {
                                return option;
                            }
                            if (option.inputValue) {
                                return option.inputValue;
                            }
                            return option.nome;
                        }}
                        selectOnFocus
                        clearOnBlur
                        handleHomeEndKeys
                        renderOption={(option) => option.nome}
                        style={{ width: 300 }}
                        freeSolo
                        renderInput={(params) => (
                            <Paper>
                                <Grid containe xs={12}>
                                    <Grid item>
                                        <TextField
                                            {...params}
                                            label="Pesquisar"
                                            variant="outlined"
                                        // inputProps={{
                                        //     startAdornment: (
                                        //         <InputAdornment position="start">
                                        //             <SearchIcon />
                                        //         </InputAdornment>
                                        //     )
                                        // }}    
                                        />
                                    </Grid>
                                </Grid>
                            </Paper>
                        )}
                    />
                </Grid>
            </Grid>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form onSubmit={handleSubmit}>
                    <DialogTitle id="form-dialog-title">Adicionar um novo cliente</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Está tentando utilizar {filtro} não cadastrado? Cadastre aqui:
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            value={dialogValue.nome}
                            onChange={(event) => setDialogValue({ ...dialogValue, nome: event.target.value })}
                            label="Nome"
                            type="text"
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            value={dialogValue.cpf}
                            onChange={(event) => setDialogValue({ ...dialogValue, cpf: event.target.value })}
                            label="CPF"
                            type="text"
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            value={dialogValue.rg}
                            onChange={(event) => setDialogValue({ ...dialogValue, rg: event.target.value })}
                            label="RG"
                            type="text"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button type="submit" color="primary">
                            Adicionar
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
    );
}


const resultadoPessoa = [
    { nome: 'Willinghan B. Tomaz', cpf: '10041574958', rg: '143935957' },
    { nome: 'Vinicius', cpf: '10041574958', rg: '143935957' },
    { nome: 'Leandro', cpf: '10041574958', rg: '143935957' },
    { nome: 'Willian', cpf: '10041574958', rg: '143935957' },
    { nome: 'Gerson', cpf: '10041574958', rg: '143935957' },
    { nome: 'Maria', cpf: '10041574958', rg: '143935957' },
    { nome: 'Leopolda', cpf: '10041574958', rg: '143935957' },
    { nome: 'Tunica', cpf: '10041574958', rg: '143935957' },
    { nome: 'Margarete', cpf: '10041574958', rg: '143935957' },
    { nome: 'Josefa', cpf: '10041574958', rg: '143935957' },
    { nome: 'Cleiton', cpf: '10041574958', rg: '143935957' },
    { nome: 'Cremilda', cpf: '10041574958', rg: '143935957' },
    { nome: 'Josefina', cpf: '10041574958', rg: '143935957' },
    { nome: 'Josesclaudilene', cpf: '10041574958', rg: '143935957' },
    { nome: 'Targarida', cpf: '10041574958', rg: '143935957' },
    { nome: 'Gunhild', cpf: '10041574958', rg: '143935957' },
    { nome: 'Gofrid', cpf: '10041574958', rg: '143935957' },
    { nome: 'Frey', cpf: '10041574958', rg: '143935957' },
    { nome: 'Freya', cpf: '10041574958', rg: '143935957' },
    { nome: 'Tyr', cpf: '10041574958', rg: '143935957' },
    { nome: 'Odin', cpf: '10041574958', rg: '143935957' },
    { nome: 'Thor', cpf: '10041574958', rg: '143935957' },
    { nome: 'Skati', cpf: '10041574958', rg: '143935957' },
    { nome: 'Fenrir', cpf: '10041574958', rg: '143935957' },
];


