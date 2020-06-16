import React from 'react';
import NavBar from '../../components/Navbar/index';
import Container from '@material-ui/core/Container';
import AddPesoaButton from '../../components/AddPessoaButton/index';
import { makeStyles } from '@material-ui/core/styles';

// import FreeSoloCreateOptionDialog from '../../components/pesquisa/index';
import FreeSoloCreateOptionDialog from '../../components/Pesquisa/cloneDebug';

// import CardPessoa from '../../components/CardPessoa/index';
import CardPessoa from '../../components/CardPessoa/cloneDebug';

const useStyles = makeStyles(theme => ({
    controlaButton: {
        position: "fixed"
    },
    dica: {
        margin: '0 auto',
        background: '#7e57c2',
        fontFamily: 'open sans',
        fontSize: '0.85em',
        lineHeight: '1.6em',
        borderRadius: '15px',
        width: '300px',
        height: 'auto',
        color: '#fff',
        padding: '20px',
        position: 'relative',
        marginTop: '30px',
        '&::after': {
            content: "",
            width: 0,
            height: 0,
            position: 'absolute',
            borderLeft: '20px solid transparent',
            borderRight: '20px solid transparent',
            /*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
            /*Aqui entra a cor da "aba" do balão */
            borderBottom: '20px solid #7e57c2',
            top: '-20px', /*localização. Experimente alterar para 'bottom'*/
            left: '20%',
        }
    }
}))

export default function Home() {

    const classes = useStyles();

    return (
        <>
            <NavBar />
            <div className={classes.controlaButton}>
                <AddPesoaButton />
                <div className={classes.dica}>
                    Utilize o botão acima para cadastrar uma nova pessoa.
                </div>
            </div>
            <Container maxWidth="md" style={{ marginTop: 10 }}>
                {/* <FreeSoloCreateOptionDialog /> */}
                <CardPessoa />
            </Container>
        </>
    )
}