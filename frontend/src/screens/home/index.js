import React from 'react';
import NavBar from '../../components/Navbar/index';
import Container from '@material-ui/core/Container';

// import FreeSoloCreateOptionDialog from '../../components/pesquisa/index';
import FreeSoloCreateOptionDialog from '../../components/Pesquisa/cloneDebug';

// import CardPessoa from '../../components/CardPessoa/index';
import CardPessoa from '../../components/CardPessoa/cloneDebug';

export default function Home() {
    return (
        <>
            <NavBar />
            <Container maxWidth="md" style={{ marginTop: 10 }}>
                {/* <FreeSoloCreateOptionDialog /> */}
                <CardPessoa />
            </Container>
        </>
    )
}