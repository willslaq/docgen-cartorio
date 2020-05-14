import React from 'react';
import NavBar from '../../components/navbar/index';
import CardPessoa from '../../components/cardPessoa/index';
import Container from '@material-ui/core/Container';

export default function Home() {
    return (
        <>
            <NavBar />
            <Container maxWidth="md" style={{ marginTop: 10 }}>
                <CardPessoa />
            </Container>
        </>
    )
}