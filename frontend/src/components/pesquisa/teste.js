import React from 'react';
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

const filter = createFilterOptions();

export default function FreeSoloCreateOptionDialog() {
    const [value, setValue] = React.useState(null);
    const [open, toggleOpen] = React.useState(false);

    const handleClose = () => {
        setDialogValue({
            nome: '',
            cpf: '',
        });

        toggleOpen(false);
    };

    const [dialogValue, setDialogValue] = React.useState({
        nome: '',
        cpf: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue({
            nome: dialogValue.nome,
            cpf: dialogValue.cpf,
        });

        handleClose();
    };

    return (
        <React.Fragment>
            <Grid container style={{ marginTop: 50 }}>
                <Grid item xs={12} align="center">
                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                            if (typeof newValue === 'string') {
                                // timeout to avoid instant validation of the dialog's form.
                                setTimeout(() => {
                                    toggleOpen(true);
                                    setDialogValue({
                                        nome: newValue,
                                        cpf: '',
                                    });
                                });
                                return;
                            }

                            if (newValue && newValue.inputValue) {
                                toggleOpen(true);
                                setDialogValue({
                                    nome: newValue.inputValue,
                                    cpf: '',
                                });

                                return;
                            }

                            setValue(newValue);
                        }}
                        filterOptions={(options, params) => {
                            const filtered = filter(options, params);

                            if (params.inputValue !== '') {
                                filtered.push({
                                    inputValue: params.inputValue,
                                    nome: `Adicionar CPF: "${params.inputValue}"`,
                                });
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
                            Está tentando utilizar um CPF não cadastrado? Cadastre aqui:
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
                        {/* <TextField
                            margin="dense"
                            id="name"
                            value={dialogValue.cpf}
                            onChange={(event) => setDialogValue({ ...dialogValue, rg: event.target.value })}
                            label="RG"
                            type="text"
                        /> */}
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
    { nome: 'Willinghan B. Tomaz', cpf: '10041574958' },
    { nome: 'Vinicius', cpf: '10041574958' },
    { nome: 'Leandro', cpf: '10041574958' },
    { nome: 'Willian', cpf: '10041574958' },
    { nome: 'Gerson', cpf: '10041574958' },
    { nome: 'Maria', cpf: '10041574958' },
    { nome: 'Leopolda', cpf: '10041574958' },
    { nome: 'Tunica', cpf: '10041574958' },
    { nome: 'Margarete', cpf: '10041574958' },
    { nome: 'Josefa', cpf: '10041574958' },
    { nome: 'Cleiton', cpf: '10041574958' },
    { nome: 'Cremilda', cpf: '10041574958' },
    { nome: 'Josefina', cpf: '10041574958' },
    { nome: 'Josesclaudilene', cpf: '10041574958' },
    { nome: 'Targarida', cpf: '10041574958' },
    { nome: 'Gunhild', cpf: '10041574958' },
    { nome: 'Gofrid', cpf: '10041574958' },
    { nome: 'Frey', cpf: '10041574958' },
    { nome: 'Freya', cpf: '10041574958' },
    { nome: 'Tyr', cpf: '10041574958' },
    { nome: 'Odin', cpf: '10041574958' },
    { nome: 'Thor', cpf: '10041574958' },
    { nome: 'Skati', cpf: '10041574958' },
    { nome: 'Fenrir', cpf: '10041574958' },
];


<Autocomplete
      id="google-map-demo"
      style={{ width: 300 }}
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Add a location" variant="outlined" fullWidth />
      )}
      renderOption={(option) => {
        const matches = option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match) => [match.offset, match.offset + match.length]),
        );

        return (
          <Grid container alignItems="center">
            <Grid item>
              <LocationOnIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              {parts.map((part, index) => (
                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                  {part.text}
                </span>
              ))}

              <Typography variant="body2" color="textSecondary">
                {option.structured_formatting.secondary_text}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    />